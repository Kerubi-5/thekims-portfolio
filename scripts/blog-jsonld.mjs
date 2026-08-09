export const SITE_NAME = 'John Kim';
export const SITE_URL = 'https://personal-portfolio-sage-delta-47.vercel.app';
export const AUTHOR_URL = 'https://github.com/Kerubi-5';

export function createBlogPostingSchema({ post, url, siteUrl = SITE_URL }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: AUTHOR_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME}'s Writing`,
      url: `${siteUrl}/blog/`,
    },
    publisher: {
      '@type': 'Person',
      name: SITE_NAME,
      url: AUTHOR_URL,
    },
  };

  if (post.dateModified) schema.dateModified = post.dateModified;
  if (post.tags?.length) schema.keywords = post.tags.join(', ');

  return schema;
}

// Keep JSON-LD inert when post content contains markup-like characters.
export function serializeJsonLd(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => {
    const escapes = { '<': '\\u003c', '>': '\\u003e', '&': '\\u0026', '\u2028': '\\u2028', '\u2029': '\\u2029' };
    return escapes[character];
  });
}

import Head from "next/head";
import {
  DOMAIN,
  DEFAULT_OG_IMAGE,
  DEFAULT_AUTHOR,
  DEFAULT_GIVEN_NAME,
  DEFAULT_FAMILY_NAME,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_GITHUB,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  TWITTER_HANDLE,
} from "config/seo";

interface ISEO {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string[];
  siteName?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  mainPage?: boolean;
}

/**
 * Generates JSON-LD schema markup for structured data.
 * Uses shared constants to maintain consistency across SEO metadata.
 * Follows Schema.org Person specification for proper structured data.
 *
 * @param author - The author name
 * @param canonicalUrl - The canonical URL of the page
 * @param imageUrl - The image URL for the person
 */
const schemaMarkup = (author: string = DEFAULT_AUTHOR, canonicalUrl: string = DOMAIN, imageUrl: string = DEFAULT_OG_IMAGE) => {
  //! NOTE: Works for should be changed depending on who you're working for right now
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "givenName": DEFAULT_GIVEN_NAME,
    "familyName": DEFAULT_FAMILY_NAME,
    "gender": "Male",
    "nationality": {
      "@type": "Country",
      "name": "Philippines"
    },
    "jobTitle": ["Software Engineer", "AI Engineer", "Full-Stack Web Developer"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationalCategory": "15-1252.00",
      "experienceRequirements": "5+ years",
      "skills": "Software Development, AI/ML Engineering, Full-Stack Development"
    },
    "url": canonicalUrl,
    "email": CONTACT_EMAIL,
    "telephone": CONTACT_PHONE,
    "image": imageUrl,
    "sameAs": [
      SOCIAL_LINKEDIN,
      SOCIAL_TWITTER,
      SOCIAL_GITHUB
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English"
      },
      {
        "@type": "Language",
        "name": "Filipino"
      }
    ],
    "knowsAbout": [
      "Software Engineering",
      "Artificial Intelligence",
      "Large Language Models (LLMs)",
      "Machine Learning",
      "AI Engineering",
      "Full-Stack Development",
      "Web Development",
      "Front-End Development",
      "Back-End Development",
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "PHP",
      "Responsive Design",
      "SEO",
      "API Development",
      "Database Design",
      "Cloud Computing",
      "DevOps"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "BaossDev"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Polytechnic University of the Philippines",
      "url": "https://www.pup.edu.ph/"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Cum Laude",
      "description": "Latin honor received from Polytechnic University of the Philippines",
      "educationalLevel": "BachelorDegree",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Polytechnic University of the Philippines",
        "url": "https://www.pup.edu.ph/"
      }
    }
  };

  return {
    __html: JSON.stringify(schema),
  };
};

const SEOHeader = ({
  title = "TheKims - Unleashing Your Online Potential with Web Development",
  description = "John Kim A. Querobines is a seasoned freelance web developer who delivers personalized solutions for stunning websites that cater to your entrepreneurial needs. Meta description",
  keywords = ["freelancer", "web-development", "portfolio", "thekims"],
  author = DEFAULT_AUTHOR,
  siteName = SITE_NAME,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = TWITTER_HANDLE,
  mainPage = false,
}: ISEO) => {
  // Build canonical URL once to avoid repetition
  const slug = canonical?.toLowerCase();
  const canonicalUrl = `${DOMAIN}/${canonical ? slug + "/" : ""}`;
  const imageUrl = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Head>
      {/* Default Metadata */}
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="robots" content="index,follow" />

      {/* Open graph meta tags */}
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en" />
      <meta key="og_url" property="og:url" content={canonicalUrl} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_image" property="og:image" content={imageUrl} />
      <meta key="og_image:alt" property="og:image:alt" content={title} />
      <meta key="og_image:width" property="og:image:width" content="1056" />
      <meta key="og_image:height" property="og:image:height" content="510" />

      {/* Twitter tags */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta key="twitter:creator" name="twitter:creator" content={twitterHandle} />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta key="twitter:description" property="twitter:description" content={description} />
      <meta key="twitter:image:alt" name="twitter:image:alt" content={title} />

      {/* Schema Markup */}
      {mainPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaMarkup(author, canonicalUrl, imageUrl)}
          key="product-jsonld"
        />
      )}
    </Head>
  );
};

export default SEOHeader;

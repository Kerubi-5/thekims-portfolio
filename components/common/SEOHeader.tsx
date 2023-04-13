import Head from "next/head";

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
}

const DOMAIN = "https://www.thekims.dev";
const DEFAULT_OG_IMAGE = "https://www.thekims.dev/assets/og-image.png";

const SEOHeader = ({
  title = "TheKims - Unleashing Your Online Potential with Web Development",
  description = "John Kim A. Querobines is a seasoned freelance web developer who delivers personalized solutions for stunning websites that cater to your entrepreneurial needs. Meta description",
  keywords = ["freelancer", "web-development", "portfolio", "thekims"],
  author = "John Kim A. Querobines",
  siteName = "The Kims",
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@Kerubi5s",
}: ISEO) => {
  const slug = canonical?.toLowerCase();

  return (
    <Head>
      {/* Default Metadata */}
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={`${DOMAIN}/${canonical ? slug : ""}`} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />

      {/* Open graph meta tags */}
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en" />
      <meta
        key="og_url"
        property="og:url"
        content={`${DOMAIN}/${canonical ? slug : ""}`}
      />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta key="og_image:alt" property="og:image:alt" content={title} />
      <meta key="og_image:width" property="og:image:width" content="1056" />
      <meta key="og_image:height" property="og:image:height" content="510" />

      {/* Twitter tags */}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        key="twitter:image:alt"
        name="twitter:image:alt"
        content={title}
      ></meta>
    </Head>
  );
};

export default SEOHeader;

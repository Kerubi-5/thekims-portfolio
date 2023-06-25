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
  mainPage?: boolean;
}

const schemaMarkup = () => {
  //! NOTE: Works for should be changed depending on who you're working for right now
  return {
    __html: `{
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "John Kim A. Querobines",
    "gender": "Male",
    "givenName": "John Kim",
    "familyName": "Querobines",
    "nationality": "Filipino",
    "jobTitle": "Registered Freelancer Web Developer",
    "url": "https://www.thekims.dev/",
    "email": "johnkim.querobines@gmail.com",
    "telephone": "0927-467-8658",
    "image": "https://www.thekims.dev/JohnKim.png",
    "sameAs": [
      "https://www.linkedin.com/in/john-kim-querobines-4507521b8/",
      "https://twitter.com/Kerubi5s/",
      "https://github.com/Kerubi-5/"
    ],
    "knowsLanguage": ["HTML", "CSS", "JavaScript", "PHP"],
    "knowsAbout": [
      "Web Development",
      "Front-End Development",
      "Back-End Development",
      "Responsive Design",
      "SEO"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Refocus"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Polytechnic University of the Philippines",
      "url": "https://www.pup.edu.ph/",
      "alumni": [
        {
          "@type": "Person",
          "name": "John Kim A. Querobines",
          "sameAs": "https://www.linkedin.com/in/john-kim-querobines-4507521b8/"
        }
      ]
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Cum Laude",
      "description": "Latin honor received from Polytechnic University of the Philippines",
      "educationalLevel": "College",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "Polytechnic University of the Philippines"
      }
    }
  }`,
  };
};

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
  mainPage = false,
}: ISEO) => {
  const slug = canonical?.toLowerCase();

  return (
    <Head>
      {/* Default Metadata */}
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={`${DOMAIN}/${canonical ? slug + "/" : ""}`} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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

      {/* Schema Markup */}
      {mainPage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaMarkup()}
          key="product-jsonld"
        />
      )}
    </Head>
  );
};

export default SEOHeader;

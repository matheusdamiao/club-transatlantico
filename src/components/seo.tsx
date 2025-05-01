import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import OG from "./../assets/images/OG.png";

type PropsSEO = {
  title?: string;
  description?: string;
  og?: string;
};

const SEO = ({ title, description, og }: PropsSEO) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const seo = {
    title: title || data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    OG: og || OG,
  };

  return (
    <>
      <html lang="pt" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <meta name="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.OG} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default SEO;

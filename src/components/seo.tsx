import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import OG from "./../assets/images/OG.png";

type PropsSEO = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: PropsSEO) => {
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
  };

  return (
    <>
      <html lang="pt" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      <meta name="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={OG} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default SEO;

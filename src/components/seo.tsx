import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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

  console.log(data);
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
      <meta name="og:site_name" content={data.site.siteMetadata.title} />
    </>
  );
};

export default SEO;

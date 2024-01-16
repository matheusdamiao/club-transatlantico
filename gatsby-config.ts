import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Club Transatlântico`,
    description: `A ponte entre o Brasil e a Europa`,
    siteUrl: `https://www.clubtransatlantico.com.br`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-google-gtag",
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require(`autoprefixer`)
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `assets`,
        // Path to the directory
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `fonts`,
        // Path to the directory
        path: `${__dirname}/src/assets/fonts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Club Transatlântico`,
        short_name: `Club`,
        start_url: `/`,
        background_color: `#fffff`,
        display: `standalone`,
        icon: `src/assets/images/favicon-32x32.png`,
      },
    },
    

  ]
};

export default config;

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "eve-vegan-eats",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "951b989be9d55f57dc1ba147455497",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

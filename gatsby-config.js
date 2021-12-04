module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "eve-vegan-eats",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "2a6016bf081d77e23e126ebd7de6be",
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

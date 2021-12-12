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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `corinthia\:400`,
          `cursive pro\:300,400,400i,700`, // you can also specify font weights and styles
          `hind`,
        ],
        display: "swap",
      },
    },
  ],
};

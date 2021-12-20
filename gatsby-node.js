exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query Articles {
      allDatoCmsArticle {
        edges {
          node {
            slug
            title
            content
            structuredcontent {
              value
              blocks {
                __typename
                ... on DatoCmsImage {
                  id
                  image {
                    url
                    alt
                  }
                }
              }
            }
            image {
              url
              filename
            }
          }
        }
      }
    }
  `);

  const { edges: articles } = data.allDatoCmsArticle;

  articles.forEach((edge) => {
    const slug = edge.node.slug;
    actions.createPage({
      path: `${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { edge },
    });
  });
};

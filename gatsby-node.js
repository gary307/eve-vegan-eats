exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query Articles {
      allDatoCmsArticle {
        edges {
          node {
            slug
            title
            structuredcontent {
              value
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
      path: `/recipes/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { edge },
    });
  });
};

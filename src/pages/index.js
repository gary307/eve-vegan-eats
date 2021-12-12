import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const colors = {
  orange: "#F27405",
  green: "#72A603",
};

//styled components
const Heading = styled.div`
  text-align: center;
  background: ${colors.orange};
  color: white;
  font-family: "Corinthia", cursive;
  padding: 20px;
`;

const HeadingStyle = styled.h1`
  font-family: arial;
  font-size: 60px;
  font-weight: 100;
  font-family: "Corinthia", cursive;
`;

const PageWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  margin-top: 30px;
  margin: 40px;
  margin-bottom: 70px;
`;

const ArticlesTitle = styled.h2`
  text-align: center;
  font-family: "Corinthia", cursive;
  font-size: 45px;
  color: ${colors.green};
`;

const Article = styled.div`
  width: 100%;
`;

const ArticleImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  border: 4px solid ${colors.green};

  @media (max-width: 568px) {
    height: 200px;
  }

  @media (max-width: 368px) {
    height: 150px;
  }
`;

const ArticleImage = styled.img`
  width: 100%;
`;

const ArticleTitle = styled.h3`
  color: #333;
  font-family: hind;
  font-size: 20px;
  margin-bottom: 0px;
`;

const ArticleCopy = styled.p`
  margin-top: 3px;
  font-family: hind;
  color: #333;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Corinthia&display=swap');
  html, body {
    font-family: arial;
    margin: 0;
    padding: 0;
    color: ${(props) => (props.whiteColor ? "white" : "black")};
  }
`;

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allDatoCmsArticle;

  return (
    <main>
      <GlobalStyle />
      <Heading>
        <HeadingStyle>Eve's Vegan Eats</HeadingStyle>
      </Heading>
      <PageWrapper>
        <ArticlesTitle>Latest Recipes</ArticlesTitle>
        <ArticlesWrapper>
          {articles.map((article) => (
            <Article>
              <ArticleImageWrapper>
                <ArticleImage src={article.node.image.url} />
              </ArticleImageWrapper>
              <ArticleTitle>{article.node.title}</ArticleTitle>
              <ArticleCopy>{article.node.excerpt}</ArticleCopy>
            </Article>
          ))}
        </ArticlesWrapper>
      </PageWrapper>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query Home {
    allDatoCmsArticle {
      edges {
        node {
          title
          content {
            value
          }
          excerpt
          image {
            url
            filename
          }
        }
      }
    }
  }
`;

import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

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
  margin-top: 20px;
  margin-bottom: 20px;
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
  text-decoration: none;
`;

const ArticleCopy = styled.p`
  margin-top: 3px;
  font-family: hind;
  color: #333;
`;

const HeaderStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
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
        <HeaderStyledLink to="/">
          <HeadingStyle>Eve's Vegan Eats</HeadingStyle>
        </HeaderStyledLink>
      </Heading>
      <PageWrapper>
        <ArticlesTitle>Latest Recipes</ArticlesTitle>
        <ArticlesWrapper>
          {articles.reverse().map((article) => (
            <Article>
              <ArticleImageWrapper>
                <StyledLink to={`/recipes/${article.node.slug}`}>
                  <ArticleImage src={article.node.image.url} />
                </StyledLink>
              </ArticleImageWrapper>
              <StyledLink to={`/recipes/${article.node.slug}`}>
                <ArticleTitle>{article.node.title}</ArticleTitle>
              </StyledLink>
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
          excerpt
          slug
          image {
            url
            filename
          }
        }
      }
    }
  }
`;

import React from "react";
import { StructuredText } from "react-datocms";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

const colors = {
  orange: "#F27405",
  green: "#72A603",
};

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

const BlogWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 70px;
  padding: 30px;
  padding-top: 0;
  box-sizing: border-box;

  img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 450px;

    @media screen and (max-width: 700px) {
      height: 350px;
    }

    @media screen and (max-width: 400px) {
      height: 200px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const ArticleTitle = styled.h1`
  text-align: center;
  font-family: "Corinthia", cursive;
  font-size: 50px;
  margin-top: 40px;
  margin-bottom: 30px;
  color: #333;
  color: ${colors.green};
`;

const StyledImg = styled.img`
  border: 4px solid ${colors.green};
  box-sizing: border-box;
`;

const ArticleContent = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Corinthia&display=swap');
  html, body {
    font-family: hind;
    margin: 0;
    padding: 0;
    color: #333;
  }

  h2 {
    margin-top: 40px;
  }

  p {
    margin-top: 3px;
  }

  ul {
    line-height 18px;
  }
`;

export default function BlogPost({ pageContext }) {
  const { title, image, structuredcontent } = pageContext.edge.node;

  return (
    <div>
      <GlobalStyle />
      <Heading>
        <StyledLink to="/">
          <HeadingStyle>Eve's Vegan Eats</HeadingStyle>
        </StyledLink>
      </Heading>

      <BlogWrapper>
        <ArticleTitle>{title}</ArticleTitle>
        <StyledImg src={image.url} />
        <ArticleContent>
          <StructuredText data={structuredcontent} />
        </ArticleContent>
      </BlogWrapper>
    </div>
  );
}

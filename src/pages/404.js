import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const colors = {
  orange: "#F27405",
  green: "#72A603",
};

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const paragraphStyles = {
  marginBottom: 48,
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
`;

const Body = styled.div`
  text-align: center;
  margin-top: 50px;
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

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <GlobalStyle />
      <Heading>
        <StyledLink to="/">
          <HeadingStyle>Eve's Vegan Eats</HeadingStyle>
        </StyledLink>
      </Heading>
      <Body style={paragraphStyles}>
        <h1>404</h1>
        <h3>
          Opps, looks like you have gotten lost, click below to get back to the
          home screen
        </h3>
        <Link to="/">Go home</Link>.
      </Body>
    </main>
  );
};

export default NotFoundPage;

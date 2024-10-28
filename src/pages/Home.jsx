import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <ImageWrapper>
        <HeroImage src="src/assets/images/store.jpg" alt="Hero" />
      </ImageWrapper>
      <TextContent>
        <h1>Welcome to Distinctive</h1>
        <p>Explore our unique products and find what makes you stand out</p>
      </TextContent>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 60vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
`;

const TextContent = styled.div`
  margin-top: 1.5rem;
  color: #333;
`;

export default Home;

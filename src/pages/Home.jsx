import React from "react";
import SearchPanel from "../components/SearchPanel";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <ImageWrapper>
        <HeroImage src="src/assets/images/store.jpg" alt="Hero" />
      </ImageWrapper>
      <TextContent>
        <h1>
          Welcome to <StyledDistinctive>distinctive.</StyledDistinctive>
        </h1>
        <p>Explore our unique products and find what makes you stand out</p>
      </TextContent>
      <SearchPanel />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledDistinctive = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #cca43b;
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
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  color: #333;
`;

export default Home;

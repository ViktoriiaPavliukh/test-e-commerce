import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";
import styled from "styled-components";
import products from "../data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  // Main image state
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) {
    console.error(`Product with ID ${id} not found.`);
    return <div>Product not found</div>;
  }

  return (
    <PageContainer>
      <MainImageContainer>
        <MainImage src={mainImage} alt={`${product.name} main image`} />
        <TabsRoot
          defaultValue="0"
          onValueChange={(value) => setMainImage(product.images[value])}
        >
          <TabsList>
            {product.images.map((image, index) => (
              <TabsTrigger key={index} value={index.toString()}>
                <ThumbnailImage
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </TabsRoot>
      </MainImageContainer>
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ProductDetails>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    gap: 40px;
  }
`;

const MainImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    // justify-content: left;
    align-items: flex-start;
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 570px;

  @media (min-width: 768px) {
    // max-width: 400px;
    // max-height: 400px;
  }

  @media (min-width: 1440px) {
    max-width: 570px;
    max-height: 570px;
  }
`;

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: fit-content;
    flex-direction: row;
  }
`;

const TabsList = styled(Tabs.List)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

const TabsTrigger = styled(Tabs.Trigger)`
  padding: 0;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: none;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s;

  &[data-state="active"] {
    border-color: #242f40;
  }
  @media (min-width: 768px) {
    border-radius: 0;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: center;
  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProductName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  background-color: #242f40;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #cca43b;
  }
`;

export default ProductPage;

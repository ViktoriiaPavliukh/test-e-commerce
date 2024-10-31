import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import LikeBtn from "../components/LikeBtn";
import styled from "styled-components";
import products from "../data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) {
    console.error(`Product with ID ${id} not found.`);
    return <div>Product not found</div>;
  }

  return (
    <PageContainer>
      <MainImageContainer>
        <OverlayContainer>
          <LikeBtn />
        </OverlayContainer>
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
        <ProductDescription>
          {product.description}
          <PriceTag>Price: ${product.price}</PriceTag>
        </ProductDescription>
        <OptionsContainer>
          <OptionTitle>Select size:</OptionTitle>
          <Options>
            {product.options.sizes.map((size) => (
              <OptionButton
                key={size}
                onClick={() => setSelectedSize(size)}
                selected={selectedSize === size}
              >
                {size}
              </OptionButton>
            ))}
          </Options>
        </OptionsContainer>
        <OptionsContainer>
          <OptionTitle>Select color:</OptionTitle>
          <Options>
            {product.options.colors.map((color) => (
              <OptionButton
                key={color}
                onClick={() => setSelectedColor(color)}
                selected={selectedColor === color}
                style={{ backgroundColor: color }}
              />
            ))}
          </Options>
        </OptionsContainer>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <AddToCartButton>
              <FiShoppingCart />
              <span>Add to cart</span>
            </AddToCartButton>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <TooltipContent>Add this item to your cart</TooltipContent>
          </Tooltip.Portal>
        </Tooltip.Root>
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
    align-items: stretch;
    padding: 1rem 2rem;
    gap: 40px;
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const PriceTag = styled.h5`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 20px 0 0 0;
  text-align: left;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 570px;

  @media (min-width: 768px) {
    border-radius: 16px;
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
  padding: 1rem 2rem;

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    padding: 0;
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
    border-radius: 16px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: center;
  padding: 1rem 2rem;
  
  @media (min-width: 768px) {
    padding: 0;
    width: 50%;
    height: 100%;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProductName = styled.h1`
  font-size: 2rem;
 margin: 0;
  font-weight: 400;
`;

const ProductDescription = styled.p`
  font-size: 1.1rem;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const OptionTitle = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 10px;
  margin-top: 0;
  font-weight: 400;
  text-align: left;
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
`;

const OptionButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#cca43b" : "#e5e5e5")};
  color: ${({ selected }) => (selected ? "#242f40" : "#333")};
  border-radius: 6px;
  min-width: 36px;
  min-height: 36px;
  border: ${({ selected }) =>
    selected ? "1px solid #cca43b" : "1px solid transparent"};
  &:hover {
    background-color: ${({ selected }) => (selected ? "#242f40" : "#e5e5e5")};
    color: ${({ selected }) => (selected ? "#fff" : "#242f40")};
    border: 1px solid #cca43b;
  }
`;

const AddToCartButton = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #242f40;
  color: white;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  border: 1px solid #242f40;

  &:hover {
    background-color: #cca43b;
    color: #242f40;
  }
`;

const TooltipContent = styled(Tooltip.Content)`
  background-color: #363636;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export default ProductPage;

import React from "react";
import { Link } from "react-router-dom";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HeartIcon } from "@radix-ui/react-icons";
import { FiShoppingCart } from "react-icons/fi";
import products from "../data/products.json";
import styled from "styled-components";

const ProductsList = () => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <Link to={`/product/${product.id}`}>
          <ProductCard key={product.id}>
            <AvatarRoot>
              <PriceTag>${product.price}</PriceTag>
              <AvatarImage src={product.images[0]} alt={product.name} />
            </AvatarRoot>
            <ProductName>{product.name}</ProductName>
            <ButtonWrapper>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <LikeButton>
                    <HeartIcon />
                  </LikeButton>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <TooltipContent>
                    Add this item to your favorites
                  </TooltipContent>
                </Tooltip.Portal>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <AddToCartButton>
                    <FiShoppingCart />
                  </AddToCartButton>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <TooltipContent>Add this item to your cart</TooltipContent>
                </Tooltip.Portal>
              </Tooltip.Root>
            </ButtonWrapper>
          </ProductCard>
        </Link>
      ))}
    </ProductGrid>
  );
};

const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  width: 100%;
  cursor: pointer;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AvatarRoot = styled(Avatar.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative; /* Required for absolute positioning of PriceTag */
`;

const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 300px;
  border-radius: 16px 16px 0 0;
`;

const PriceTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 50%;
  padding: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;
`;

const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 14px;
`;

const LikeButton = styled(IconButton)`
  background-color: #fff;
  border: 1px solid #242f40;
  color: #242f40;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: #cca43b;
  }
`;

const AddToCartButton = styled(IconButton)`
  background-color: #242f40;
  color: white;
  border: 1px solid #242f40;

  &:hover {
    color: #cca43b;
  }
  svg {
    width: 24px;
    height: 24px;
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

export default ProductsList;

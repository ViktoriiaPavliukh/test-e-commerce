import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HeartIcon } from "@radix-ui/react-icons";
import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";
import {
  ProductGrid,
  ProductCard,
  AvatarRoot,
  AvatarImage,
  PriceTag,
  ProductName,
  ButtonWrapper,
  LikeButton,
  AddToCartButton,
  TooltipContent,
  ProductsWrapper,
  NoProductsMessage,
} from "../StyledComponents";
import SearchPanel from "../components/SearchPanel";

const ProductFilter = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  if (!filteredProducts.length) {
    return (
      <NoProductsMessage>
        {`No products found in the ${category} category.`}
      </NoProductsMessage>
    );
  }

  return (
    <ProductsWrapper>
      <SearchPanel />
      <ProductGrid>
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
    </ProductsWrapper>
  );
};

export default ProductFilter;

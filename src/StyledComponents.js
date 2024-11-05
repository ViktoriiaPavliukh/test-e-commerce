import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";

export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

export const ProductCard = styled.div`
  background-color: #fff;
  width: 100%;
  cursor: pointer;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
  }
`;

export const AvatarRoot = styled(Avatar.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 300px;
  border-radius: 16px 16px 0 0;
`;

export const PriceTag = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: white;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 50%;
  padding: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ProductName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;
`;

export const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 14px;
`;

export const LikeButton = styled(IconButton)`
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

export const AddToCartButton = styled(IconButton)`
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

export const TooltipContent = styled(Tooltip.Content)`
  background-color: #363636;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const ProductsWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  padding: 1rem 2rem;
  padding-top: 100px;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NoProductsMessage = styled.div`
  min-height: 90vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
`;
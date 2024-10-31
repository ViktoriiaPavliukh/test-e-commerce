import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { HeartIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

const LikeBtn = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <LikeButton>
          <HeartIcon />
        </LikeButton>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <TooltipContent>Add this item to your favorites</TooltipContent>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border: none;
  color: #242f40;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: #cca43b;
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

export default LikeBtn;

import React, { useState } from "react";
import styled from "styled-components";
import {
  MagnifyingGlassIcon,
  CaretSortIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";

const SearchSort = () => {
  return (
    <SearchSortWrapper>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Search products" />
        <SearchIcon>
          <MagnifyingGlassIcon />
        </SearchIcon>
      </SearchWrapper>
      <IconWrapper>
        <CaretSortIcon />
      </IconWrapper>
      <IconWrapper>
        <MixerVerticalIcon />
      </IconWrapper>
    </SearchSortWrapper>
  );
};

const SearchSortWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-item: left;
  justify-self: left;
  justify-content: left;
  align-items: center;
  gap: 1rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 2.5rem 1rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #888;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    color: #363636;
  }
`;

export default SearchSort;

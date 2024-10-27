import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from "styled-components";
import {
  HamburgerMenuIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      <BurgerIcon onClick={toggleMenu}>
        {menuOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
      </BurgerIcon>

      <NavMenuRoot open={menuOpen}>
        <NavMenuList>
          <NavMenuItem>
            <NavMenuLink href="/men">Men</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/women">Women</NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink href="/kids">Kids</NavMenuLink>
          </NavMenuItem>
        </NavMenuList>
      </NavMenuRoot>
      <Logo>Distinctive</Logo>
      <IconContainer>
        <IconWrapper>
          <MagnifyingGlassIcon />
        </IconWrapper>
        <IconWrapper>
          <PersonIcon />
        </IconWrapper>
        <IconWrapper>
          <FiShoppingCart />
        </IconWrapper>
      </IconContainer>
    </HeaderWrapper>
  );
};

// Styled components

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  position: relative;

  /* Layout for desktop view */
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const NavMenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  align-items: center;

  /* Mobile view: hidden unless open */
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  flex: 1;

  /* Center logo on mobile */
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavMenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 1.5rem;

  /* Mobile view: stack vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavMenuItem = styled(NavigationMenu.Item)`
  list-style: none;
`;

const NavMenuLink = styled(NavigationMenu.Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #0070f3;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;

  /* Show burger icon only on mobile screens */
  @media (max-width: 768px) {
    display: block;
  }

  /* Set icon size */
  svg {
    width: 24px;
    height: 24px;
    color: #333;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: #333;
  }
`;

export default Header;

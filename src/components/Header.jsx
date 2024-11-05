import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <NavMenuLink as={Link} to="products/men">
              Men
            </NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink as={Link} to="products/women">
              Women
            </NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink as={Link} to="products/kids">
              Kids
            </NavMenuLink>
          </NavMenuItem>
        </NavMenuList>
      </NavMenuRoot>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>
          <span className="mobile">d.</span>
          <span className="desktop">distinctive.</span>
        </Logo>
      </Link>
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

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #e5e5e5;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const NavMenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 50%;
    background-color: #e5e5e5;
    justify-content: flex-start;
    gap: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  flex: 1;
  color: #cca43b;

  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
  }

  @media (max-width: 768px) {
    .mobile {
      display: flex;
      padding-left: 30px;
    }

    .desktop {
      display: none;
    }
  }
`;

const NavMenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 1.5rem;

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
  color: #363636;
  font-weight: 500;
  &:hover {
    color: #cca43b;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #363636;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    color: #363636;
  }
`;

export default Header;

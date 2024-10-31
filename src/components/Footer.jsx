import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <FooterLink to="/">About Us</FooterLink>
          <FooterLink to="/">Services</FooterLink>
          <FooterLink to="/">Contact</FooterLink>
        </FooterLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #e5e5e5;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #363636;
  font-weight: 500;

  &:hover {
    color: #cca43b;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #363636;
`;

export default Footer;

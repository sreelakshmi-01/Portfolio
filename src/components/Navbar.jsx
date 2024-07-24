import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';

import 'aos/dist/aos.css';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(180deg, #240B15 20%, #000000 100%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays on top of other elements */
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  AOS.init();
  return (
    <Nav>
      <NavLink href="#about" data-aos="fade-down" data-aos-duration="800">About</NavLink>
      <NavLink href="#skills" data-aos="fade-down" data-aos-duration="800">Skills</NavLink>
      <NavLink href="#portfolio" data-aos="fade-down" data-aos-duration="800">Portfolio</NavLink>
      <NavLink href="#contact" data-aos="fade-down" data-aos-duration="800">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;

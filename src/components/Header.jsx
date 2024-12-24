import styled from 'styled-components';
import { QUERIES } from '../constants';
import { useEffect, useState } from 'react';
import 'material-symbols';

import NavLink from './NavLink';

const Header = ({ setShowMobile }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > 250 && window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  });

  return (
    <MainHeader className={`${showHeader ? '' : 'hidden'}`}>
      <Side>
        <a href="#home" style={{ textDecoration: 'none', color: 'black' }}>
          <Logo>DJ TataMoto</Logo>
        </a>
      </Side>
      <Side>
        <Navigation>
          <NavLink href="#about">Rólam</NavLink>
          <NavLink href="#services">Szolgáltatások</NavLink>
          <NavLink href="#accesories">Technika</NavLink>
          <NavLink href="#contacts">Kapcsolat</NavLink>
        </Navigation>
      </Side>
      <Spacer />
      <MobileButton onClick={() => setShowMobile(true)}>
        <span className="material-symbols-outlined menu-icon">menu</span>
      </MobileButton>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  background: black;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  position: sticky;
  top: 0px;
  z-index: 10;
  opacity: 1;
  transition: transform 800ms;
`;

const Logo = styled.h1`
  color: white;
  text-wrap: nowrap;
  margin-left: 0;

  @media (${QUERIES.tabletAndUp}) {
    margin-left: 100px;
  }
`;

const Navigation = styled.nav`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    justify-content: center;
    gap: 18px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const Spacer = styled.div`
  display: none;

  @media (${QUERIES.tabletAndUp}) {
    display: revert;
    flex: 1;
  }
`;

const MobileButton = styled.button`
  padding: 0;
  border: 4px soild;
  display: block;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

export default Header;

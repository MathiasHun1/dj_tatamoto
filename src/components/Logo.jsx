import styled from 'styled-components';
import tataLogo from '../assets/DJTATA_mokup.svg';

const Logo = () => {
  return <LogoImg src={tataLogo} />;
};

const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;

import styled from 'styled-components';

import { COLORS } from '../constants';
import About from './About';
import Services from './Services';
import BigLogo from './BigLogo';
import Accesories from './Accesories';
import Contacts from './Contacts';
import MobileMenu from './MobileMenu';

const Main = ({ showMobileMenu, setShowMobile }) => {
  return (
    <MainWrapper>
      <BigLogo />

      <About />

      <Services />

      <Accesories />

      <Contacts />
      <MobileMenu isOpen={showMobileMenu} setShowMobile={setShowMobile} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  padding-bottom: 32px;
  background: ${COLORS.darkblue};
  position: relative;
`;

export default Main;

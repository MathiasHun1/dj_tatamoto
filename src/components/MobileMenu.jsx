import styled from 'styled-components';
import 'material-symbols';

const MobileMenu = ({ isOpen, setShowMobile }) => {
  return (
    <Overlay $opened={isOpen}>
      <CustomButton onClick={() => setShowMobile(false)}>
        <span className="material-symbols-outlined menu-icon">close</span>
      </CustomButton>
      <Content>
        <Navigation>
          <LinkWrapper>
            <a href="#about" onClick={() => setShowMobile(false)}>
              Rólam
            </a>
            <a href="#services" onClick={() => setShowMobile(false)}>
              Szolgáltatások
            </a>
            <a href="#accesories" onClick={() => setShowMobile(false)}>
              Technika
            </a>
            <a href="#contacts" onClick={() => setShowMobile(false)}>
              Árak, Kapcsolat
            </a>
          </LinkWrapper>
        </Navigation>
      </Content>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 120vh;
  z-index: 4000;
  background: hsl(0 0 100);

  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(p) => (p.$opened ? 'translateX(0)' : 'translateX(110%)')};
  transition: transform 250ms;
`;

const Content = styled.div`
  width: 400px;
`;

const CustomButton = styled.button`
  position: absolute;
  top: 16px;
  right: 26px;
  padding: 0;
  background: white;
  border: 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    display: block;
    width: min-content;
    font-size: 1.25rem;
    margin-bottom: 48px;
  }
`;

const LinkWrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  margin-top: -120px;
  // justify-content: space-around;
`;

export default MobileMenu;

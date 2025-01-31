import styled from 'styled-components';
import hero from '../assets/hero.jpg';

import { COLORS, QUERIES } from '../constants';

const BigLogo = () => {
  return (
    <BigLogoCont>
      <Gradient />
      <ImageContainer>
        <img src={hero} alt="" />
      </ImageContainer>
      <GradientReverse />
    </BigLogoCont>
  );
};

const BigLogoCont = styled.section`
  background: linear-gradient(0deg, ${COLORS.lightBlue}, black);
`;

const Gradient = styled.div`
  height: 50px;
  width: 100%;
  background: linear-gradient(0deg, ${COLORS.lightBlue} 0%, black);
  @media (${QUERIES.tabletAndUp}) {
    display: none;
  }
`;

const GradientReverse = styled(Gradient)`
  width: 100%;
  background: linear-gradient(0deg, black 0%, ${COLORS.lightBlue});
`;

const ImageContainer = styled.div`
  position: relative;
  margin-inline: auto;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 12px;
    background: ${COLORS.lightBlue};
    filter: blur(8px);
    transform: translateY(-5px);
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12px;
    background: ${COLORS.lightBlue};
    filter: blur(8px);
    transform: translateY(6px);
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (${QUERIES.tabletAndUp}) {
    width: 650px;

    img {
      width: 100%;
    }

    &::after,
    ::before {
      display: none;
    }
  }
`;

export default BigLogo;

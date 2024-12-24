import styled from 'styled-components';
import djSVG from '../assets/dj_man.svg';

import { COLORS, QUERIES } from '../constants';

const BigLogo = () => {
  return (
    <BigLogoCont>
      <ImageContainer>
        <img src={djSVG} alt="" />
      </ImageContainer>
    </BigLogoCont>
  );
};

const BigLogoCont = styled.section`
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, ${COLORS.lightBlue} 40%, black);
  height: 450px;

  @media (${QUERIES.tabletAndUp}) {
    height: 600px;
  }
`;

const ImageContainer = styled.div`
  width: 400px;
  margin-top: 30px;
  img {
    width: 100%;
    transform: translateY(-70px);
  }

  @media (${QUERIES.tabletAndUp}) {
    width: 650px;
    margin-top: 0;

    img {
      width: 100%;
      transform: translateY(-70px);
    }
  }
`;

export default BigLogo;

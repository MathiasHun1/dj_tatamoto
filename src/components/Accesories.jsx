import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

import Title from './Title';

import sound1 from '../assets/hang1.jpg';
import sound2 from '../assets/hang2.jpg';
import sound3 from '../assets/hang3.avif';
import sound4 from '../assets/hang4.jpg';
import feny1 from '../assets/feny1.jpg';
import feny2 from '../assets/feny2.jpg';
import fustgep from '../assets/fustgep.jpg';
import fustgep2 from '../assets/fustgep2.jpg';

const Accesories = () => {
  return (
    <Wrapper id="accesories">
      <Title background={`linear-gradient(${COLORS.darkblue}, black)`}>Technika</Title>
      <ImageSection>
        <ImageWrapper>
          <Image src={sound1} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={sound2} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={sound3} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={sound4} alt="" />
        </ImageWrapper>
      </ImageSection>

      <ListWrapper>
        <List>
          <li>DJ pult: Pioneer DDJ FLX4</li>
          <li>Keverőpult: Thunder F7</li>
          <li>
            Thomann hangrendszer {'('}The box CL 108/115MKII{')'}
          </li>
          <li>2 db Thunder FLASH-15 700/1400W {'15″'} Bi-Amp aktív hangfal</li>
          <li>Robotlámpák, fényállvány, füstgép is rendelkezésre állnak</li>
        </List>
      </ListWrapper>

      <ImageSection>
        <ImageWrapper>
          <Image src={feny1} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={feny2} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={fustgep} alt="" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={fustgep2} alt="" />
        </ImageWrapper>
      </ImageSection>

      <BigScreenImageWrapper>
        <BigScreenSection>
          <ImageWrapper>
            <Image src={sound1} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={sound2} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={sound3} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={sound4} alt="" />
          </ImageWrapper>
        </BigScreenSection>

        <BigScreenSection>
          <ImageWrapper>
            <Image src={feny1} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={feny2} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={fustgep} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <Image src={fustgep2} alt="" />
          </ImageWrapper>
        </BigScreenSection>
      </BigScreenImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  color: white;
  padding-bottom: 50px;
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  justify-content: start;
  border-radius: 4px;
  padding-left: 32px;

  @media (${QUERIES.tabletAndUp}) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  width: 70px;
  padding: 8px;
  background: white;
  display: flex;
  align-items: center;

  @media (${QUERIES.tabletAndUp}) {
    width: clamp(70px, 20%, 120px);
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  // border: 5px solid white;
`;

const ListWrapper = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    justify-content: center;
  }
`;

const List = styled.ul`
  padding-inline-start: 30px;
  padding-right: 32px;
  margin: 25px 0;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`;

const BigScreenImageWrapper = styled.div`
  display: none;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    justify-content: center;
  }
`;

const BigScreenSection = styled(ImageSection)`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    width: 480px;
    padding-left: 0;
  }
`;

export default Accesories;

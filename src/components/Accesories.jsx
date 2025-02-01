import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

import Title from './Title';
import { Check } from 'lucide-react';

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
      <Title background={`linear-gradient(${COLORS.darkblue}, ${COLORS.primary})`}>Technika</Title>
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

      <List>
        <ListItem>
          <Check strokeWidth={3} color={`${COLORS.lightBlue}`} /> <p>DJ pult: Pioneer DDJ FLX4</p>
        </ListItem>
        <ListItem>
          <Check strokeWidth={3} color={`${COLORS.lightBlue}`} />
          <p>Keverőpult: Thunder F7</p>
        </ListItem>
        <ListItem>
          <Check strokeWidth={3} color={`${COLORS.lightBlue}`} />
          <p>
            Thomann hangrendszer {'('}The box CL 108/115MKII{')'}
          </p>
        </ListItem>
        <ListItem>
          <Check strokeWidth={3} color={`${COLORS.lightBlue}`} />
          <p>2 db Thunder FLASH-15 700/1400W {'15″'} Bi-Amp aktív hangfal</p>
        </ListItem>
        <ListItem>
          <Check strokeWidth={3} color={`${COLORS.lightBlue}`} />
          <p>Robotlámpák, fényállvány, füstgép is rendelkezésre állnak</p>
        </ListItem>
      </List>

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

        {/* <BigScreenSection>
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
        </BigScreenSection> */}
      </BigScreenImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.primary};
  padding-bottom: 40px;
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ListWrapper = styled.div`
  width: 690px;
  padding: 0;
  @media (${QUERIES.tabletAndUp}) {
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
`;

const List = styled.ul`
  margin: 25px 0;
  padding: 0;
  @media (${QUERIES.tabletAndUp}) {
    width: 690px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`;

const BigScreenImageWrapper = styled.div`
  display: none;

  @media (${QUERIES.tabletAndUp}) {
    /* width: 100%; */
    padding-left: 36px;
    width: 690px;
    display: flex;
    justify-content: flex-start;
    gap: clamp(20px, 10%, 150px);
  }
`;

const ImageSection = styled.div`
  display: flex;
  width: fit-content;
  justify-content: start;
  border-radius: 4px;
  padding-left: 16px;
  margin-top: 16px;

  @media (${QUERIES.tabletAndUp}) {
    display: none;
  }
`;

const BigScreenSection = styled(ImageSection)`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    width: fit-content;
    justify-content: center;
    padding-left: 0;
    margin-top: 0;
    border-radius: 12px;
    overflow: hidden;
  }
`;

const ImageWrapper = styled.div`
  display: inline-block;
  width: 70px;
  padding: 8px;
  background: white;
  display: flex;
  align-items: center;

  & div {
    display: inline-block;
  }

  @media (${QUERIES.tabletAndUp}) {
    width: 90px;
  }
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
`;
export default Accesories;

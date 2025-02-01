import styled from 'styled-components';
import { COLORS, FONTSIZES, QUERIES } from '../constants';

const About = () => {
  return (
    <Wrapper id="about">
      <Card>
        <TextContainer>
          <MainTitle>Üdvözöllek a zenei világomban!</MainTitle>
          <Text>
            DJ-ként az a szenvedélyem, hogy visszahozzam a zene aranykorát. Legyen szó a 70-es évek funky hangulatáról,
            a 80-as évek ikonikus ritmusairól, vagy a 90-es évek felejthetetlen slágereiről, a célom, hogy minden
            eseményt nosztalgikus időutazássá varázsoljak. A kortalan retro klasszikusoktól a kedvenc modern slágerekig
            mindent megoldok.
          </Text>
          <Text>
            MAHASZ jogdíjjal rendelkezem {'('}Magyar Hangfelvétel-kiadók Szövetsége{')'}. Számlaképes szolgáltatóként,
            minden esetben ÁFA-mentes számla készül.
          </Text>
        </TextContainer>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: ${COLORS.primary};
  display: flex;
  justify-content: center;
  padding: 26px;
  padding: 16px;
  padding-bottom: 16px;

  @media (${QUERIES.tabletAndUp}) {
    padding-top: 50px;
    padding-bottom: 80px;
  }
`;

const MainTitle = styled.h1`
  font-size: ${FONTSIZES.mediumMobile};
  color: ${COLORS.moderateBlue};
  line-height: 1.875rem;
  width: 100%;
  text-align: center;

  @media (${QUERIES.tabletAndUp}) {
    font-size: ${FONTSIZES.mediumDesktop};
    text-align: start;
    transform: translateX(-20px);
  }
`;

const Card = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 690px;

  @media (${QUERIES.tabletAndUp}) {
    align-items: center;
  }
`;

const Text = styled.p`
  @media (${QUERIES.tabletAndUp}) {
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

export default About;

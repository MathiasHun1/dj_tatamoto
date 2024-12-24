import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

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
          {/* <Text>Számlaképes szolgáltatóként, minden esetben ÁFA-mentes számla készül.</Text> */}
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
  padding-top: 100px;
  padding-bottom: 80px;
  margin-top: calc(-15rem);

  @media (${QUERIES.tabletAndUp}) {
    padding-top: 150px;
  }
`;

const MainTitle = styled.h1`
  color: ${COLORS.lightBlue};
  line-height: 1.875rem;

  @media (${QUERIES.tabletAndUp}) {
  }
`;

const Card = styled.div`
  width: clamp(500px, 70%, 900px);
`;

const TextContainer = styled.div`
  font-size: 18px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Text = styled.p`
  // &:not(:first-of-type) {
  //   text-indent: 32px;
  // }
`;

export default About;

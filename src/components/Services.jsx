import ServiceCard from './ServiceCard';
import Title from './Title';

import weddingPic from '../assets/wedding.jpg';
import partyPic from '../assets/party.jpg';
import heartSVG from '../assets/hearts.svg';
import partySVG from '../assets/jumping.svg';
import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

const Services = () => {
  return (
    <Wrapper id="services">
      <Title background={`linear-gradient(${COLORS.primary}, ${COLORS.darkblue})`}>Szolgáltatásaim</Title>
      <ServiceCard
        imageSource={weddingPic}
        svgSource={heartSVG}
        svgWidth={'150px'}
        cardSize={'large'}
        cardText={'Esküvő'}
        direction={'row'}>
        <Text>
          Mint gépzenei szolgáltató, a jó zene és szórakoztatás biztosítására specializálódtam. Kifejezetten kisebb
          esküvőket vállalok mert szeretem ha családias és közvetlen a légkör. Hozzám odajöhet a vendéged számot kérni,
          vagy akárcsak a mikrofonba szeretne énekelni, szívesen fogadom és teljesítem a kívánságát. Jól tudom hogy
          milyen fontos a tökéletes hangulat megteremtése a különleges napotokhoz, ezért a tervezésben szorosan
          együttműködök veletek, hogy egyedi stílusotoknak megfelelő lejátszási listát állítsak össze, ezzel biztosítva,
          hogy az esküvőtök emlékezetes és szórakoztató legyen Nektek, és minden vendég számára. Ünnepeljük együtt a
          szerelmet a tökéletes zenei aláfestéssel!
        </Text>
      </ServiceCard>

      <Separator />

      <ServiceCard
        imageSource={partyPic}
        svgSource={partySVG}
        svgWidth={'160px'}
        cardSize={'large'}
        cardText={'Rendezvény'}
        direction={'reverse'}>
        <Text>
          Legyen szó szilveszteri buliról, születésnapról vagy céges eseményről, fontos számomra, hogy az est minden
          pillanata emlékezetes legyen. Együtt dolgozva alakítjuk ki a zenei programot, amely teljes mértékben tükrözi
          az elképzeléseiteket és az esemény jellegét. Garantálom, hogy a vendégek jól szórakoznak, és a buli valóban
          különleges élménnyé válik. Ünnepeljünk együtt a legjobb dallamokkal és fantasztikus energiával!
        </Text>
      </ServiceCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 4px;
  background: black;
  margin-inline: auto;
  margin-top: 0;
  border-radius: 10px;

  @media (${QUERIES.tabletAndUp}) {
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  max-width: 690px;
`;

export default Services;

import Title from './Title';

import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import 'material-symbols';
import FBlogo from '../assets/Facebook_Logo_Secondary.png';

const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <Title background={`linear-gradient(black, ${COLORS.darkblue})`}>Árak, kapcsolat</Title>

      <Inner>
        <InnerTitle>Pest megyén belül:</InnerTitle>
        <p>
          -150.000ft, mely rugalmas időbeosztással, tárgynap kora délután-tól hajnalig tarthat. Az ár tartalmazza az
          utazást, a teljes felszerelést, rejtett költségekkel nálam nem kell számolni.
        </p>
        <InnerTitle>Pest megyén kívül:</InnerTitle>
        <p>Pest megyén kívül kiszállási díj költsége 120ft/km, az alapdíjon felül.</p>
      </Inner>
      <List>
        <InnerTitle>Elérhetőség</InnerTitle>
        <Section>
          <ListItem>
            <span className="material-symbols-outlined">phone</span>
            <a href="tel:+36304147026"> +3630-414-7026 </a>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">email</span>
            <a href="mailto:laszlo70@outlook.hu">laszlo70@outlook.com</a>
          </ListItem>
          <ListItem>
            <ImageWrapper>
              <Image src={FBlogo} alt="" />
            </ImageWrapper>
            <a href="https://www.facebook.com/djtatamoto">DjTatamoto</a>
          </ListItem>
          <i>Személyesen:</i>
          <ListItem>1201 Budapest, Szondi utca 11</ListItem>
          <i>Nyitvatartás:</i>
          <ListItem>Minden hétköznap 9-18</ListItem>
        </Section>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.darkblue};
  color: white;

  & i {
    text-decoration: underline;
  }
`;

const Inner = styled.div`
  padding: 16px;

  & p:nth-of-type(2) {
    margin-bottom: 16px;
  }
`;

const InnerTitle = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

const List = styled.ul`
  padding: 0;
  padding-block: 16px;
  padding-left: 16px;
  max-width: 70ch;
  @media (${QUERIES.tabletAndUp}) {
    margin-left: 30%;
    padding-left: 0;
  }
`;

const ListItem = styled.p``;

const Section = styled.div`
  margin-bottom: 32px;
  /* padding-left: 16px; */
  padding-right: 32px;
`;

const Image = styled.img`
  display: inline-block;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export default Contacts;

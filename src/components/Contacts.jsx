import Title from './Title';

import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import 'material-symbols';
import FBlogo from '../assets/Facebook_Logo_Secondary.png';

const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <Title background={`linear-gradient(black, ${COLORS.darkblue})`}>Árak, kapcsolat</Title>

      <List>
        <p>Árak:</p>
        <Section>
          <ListItem>
            Pest megyén belüli esemény díja -150.000ft-, mely rugalmas időbeosztással, tárgynap kora délután-tól
            hajnalig tarthat. Az ár tartalmazza az utazást, a teljes felszerelést, rejtett költségekkel nálam nem kell
            számolni.
          </ListItem>
          <ListItem>Pest megyén kívül kiszállási díj költsége 120ft/km, az alapdíjon felül.</ListItem>
        </Section>
      </List>
      <List>
        <p>Elérhetőség</p>
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

  & p {
    font-weight: bold;
    text-decoration: underline;
  }

  & i {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  padding: 0;
  padding-left: 16px;
  max-width: 70ch;
  @media (${QUERIES.tabletAndUp}) {
    margin-left: 30%;
    padding-left: 0;
  }
`;

const ListItem = styled.li`
  font-size: 14px;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.125rem;
`;

const Section = styled.div`
  margin-bottom: 32px;
  padding-left: 16px;
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

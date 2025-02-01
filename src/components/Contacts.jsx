import Title from './Title';

import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import 'material-symbols';
import FBlogo from '../assets/Facebook_Logo_Secondary.png';

const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <Title background={`linear-gradient(${COLORS.primary}, ${COLORS.darkblue})`}>Árak, kapcsolat</Title>

      <Inner>
        <InnerTitle>Pest megyén belül:</InnerTitle>
        <p>
          - 150.000ft, mely rugalmas időbeosztással, tárgynap kora délután-tól hajnalig tarthat. Az ár tartalmazza az
          utazást, a teljes felszerelést, rejtett költségekkel nálam nem kell számolni.
        </p>
        <InnerTitle>Pest megyén kívül:</InnerTitle>
        <p>- Pest megyén kívül kiszállási díj költsége 120ft/km, az alapdíjon felül.</p>
      </Inner>
      <Inner>
        <InnerTitle>Elérhetőség</InnerTitle>
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
      </Inner>

      <Inner>
        <InnerTitle>Személyesen:</InnerTitle>
        <ListItem>1201 Budapest, Szondi utca 11</ListItem>
      </Inner>

      <Inner>
        <InnerTitle>Nyitvatartás:</InnerTitle>
        <ListItem>Minden hétköznap 9-18</ListItem>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.darkblue};

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Inner = styled.div`
  padding: 16px;

  @media (${QUERIES.tabletAndUp}) {
    width: 690px;
  }
`;

const InnerTitle = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding-block: 4px;

  &:hover {
    cursor: pointer;
  }
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

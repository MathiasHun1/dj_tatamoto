import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import Card from './Card';
// import partyPic from '../assets/party3.jpg';

const ServiceCard = ({ imageSource, svgSource, cardSize, cardText, children, direction }) => {
  let directionProp = direction === null || direction === 'row' ? 'row' : 'row-reverse';

  return (
    <Wrapper style={{ '--wrap-direction': directionProp }}>
      <div style={{ flex: 1 }}>
        <Card imageSource={imageSource} svgSource={svgSource} size={cardSize} text={cardText} />
      </div>
      <ChildWrapper>{children}</ChildWrapper>
      <SvgImage src={svgSource} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 300px;
  background: ${COLORS.darkblue};
  color: white;
  padding: 16px;
  padding-block: 26px;

  &:first-of-type {
    padding-top: 72px;
  }

  @media (${QUERIES.tabletAndUp}) {
    flex-direction: var(--wrap-direction);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-right: 32px;
    padding-left: 32px;
    margin-bottom: 48px;
  }
`;

const ChildWrapper = styled.div`
  max-width: 380px;
  flex: 1;
`;

const SvgImage = styled.img`
  display: none;
  width: 300px;
  align-self: center;
  flex: 1;

  @media (${QUERIES.laptopAndUp}) {
    display: block;
  }
`;

export default ServiceCard;

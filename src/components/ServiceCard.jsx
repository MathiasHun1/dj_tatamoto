import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';
import Card from './Card';
import SvgImage from './SvgImage';

const ServiceCard = ({ imageSource, svgSource, svgWidth, cardSize, cardText, children, direction }) => {
  let directionProp = direction === null || direction === 'row' ? 'row' : 'row-reverse';

  return (
    <Wrapper style={{ '--wrap-direction': directionProp }}>
      <ImagesContainer>
        <Card imageSource={imageSource} size={cardSize} text={cardText} />
        <SvgImage svgSource={svgSource} svgWidth={svgWidth} />
      </ImagesContainer>
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.darkblue};
  color: white;
  padding: 16px;
  padding-block: 26px;
  margin-bottom: 16px;

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

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChildWrapper = styled.div`
  flex: 1;
`;

export default ServiceCard;

import styled from 'styled-components';
import { COLORS, QUERIES } from '../constants';

const Title = ({ background, children }) => {
  return (
    <Wrapper $background={background}>
      <SectionTitle>{children}</SectionTitle>
    </Wrapper>
  );
};

export default Title;

const SectionTitle = styled.h1`
  color: ${COLORS.lightBlue};
  line-height: 1.875rem;

  @media (${QUERIES.tabletAndUp}) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  padding: 0 0;
  padding-left: 32px;
  margin-bottom: 50px;
  width: 100%;
  background: ${(props) => props.$background};

  @media (${QUERIES.tabletAndUp}) {
    padding-left: 0px;
  }
`;

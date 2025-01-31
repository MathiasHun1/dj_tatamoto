import styled from 'styled-components';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  color: black;
  overflow: hidden;
  text-decoration: none;
  color: white;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  width: 100%;
  height: 100%;
`;

const MainText = styled(Text)`
  ${Wrapper}:hover & {
    transform: translateY(-100%);

    transition: transform 500ms;
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  bottom: -100%;

  ${Wrapper}:hover & {
    transform: translateY(-100%);

    transition: transform 500ms;
  }
`;

export default NavLink;

import styled from 'styled-components';

const SvgImage = ({ svgSource, svgWidth }) => {
  return <Image src={svgSource} style={{ width: svgWidth }} />;
};

const Image = styled.img``;

export default SvgImage;

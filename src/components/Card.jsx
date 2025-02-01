import styled from 'styled-components';

const Card = ({ imageSource, text, size, imgSize }) => {
  const imgWidth = imgSize ? `${imgSize.toString()}px` : '100%';

  let styles;
  if (size === 'large') {
    styles = {
      '--width': '100px',
      '--height': '100%',
    };
  } else if (size === 'medium') {
    styles = {
      '--width': '150px',
      '--height': '200px',
    };
  } else {
    throw new Error('missing or invalid size properyty');
  }

  return (
    <Wrapper style={styles}>
      <ImageWrapper>
        <Caption>
          <CaptionText>{text}</CaptionText>
        </Caption>
        <Image src={imageSource} alt="" style={{ width: imgWidth }} />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 16px;
  margin-left: 16px;
  position: relative;
  width: 120px;
  height: min-content;
  box-shadow: 0px 0px 40px gray;
`;

const Image = styled.img``;

const Caption = styled.figcaption`
  position: absolute;
  color: black;
  background: yellow;
  padding: 2px 6px;
  left: 0;
  transform: translateX(-10px) translateY(-10px);
`;

const CaptionText = styled.p`
  transform: skew(-20deg);
  font-weight: 650;
`;

export default Card;

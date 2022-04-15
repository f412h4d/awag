import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AnimatedButton = ({
  text,
  animationData,
  iconWidth,
  iconHeight,
  customStyle,
  textStyle,
}) => {
  const ref = useRef(null);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    if (ref.current) {
      const animationItem = lottie.loadAnimation({
        container: ref.current,
        animationData,
        autoplay: false,
        loop: false,
      });

      setAnimation(animationItem);
    }
  }, []);

  return (
    <Button
      customStyle={customStyle}
      onMouseEnter={() => {
        animation.play();
      }}
      onMouseLeave={() => {
        animation.stop();
      }}
      onClick={() => {
        // onClick.(animationData?.nm);
      }}
    >
      <ImageItem ref={ref} iconWidth={iconWidth} iconHeight={iconHeight}></ImageItem>

      <TextContent textStyle={textStyle}>
        <Text>{text}</Text>
      </TextContent>
    </Button>
  );
};

const Button = styled.div`
  width: 12rem;
  height: 100%;
  border-radius: 0.4rem;

  background: #5652cc;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.6s;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  ${({ customStyle }) => customStyle}
`;

const ImageItem = styled.div`
  width: ${({ iconWidth }) => (iconWidth ? iconWidth : '4.3rem')};
  height: ${(props) => (props.iconHeight ? props.iconHeight : '3.2rem')};

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px 0 30px;
  font-size: 0.8rem;
  white-space: nowrap;
  color: white;

  ${({ textStyle }) => textStyle}
`;

const Text = styled.p`
  color: inherit;
  white-space: inherit;
  font-weight: normal;
  font-size: inherit;
`;

export const AnimatedButtonMemo = React.memo(AnimatedButton);

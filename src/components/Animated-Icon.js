import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AnimatedIcon = ({ loop, iconWidth, iconHeight, animationData }) => {
  const ref = useRef(null);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    if (ref.current) {
      const animationItem = lottie.loadAnimation({
        animationData,
        loop,
        autoplay: true,
        container: ref.current,
      });

      setAnimation(animationItem);
    }
  }, [animationData, loop]);

  return (
    <LottieIcon
      ref={ref}
      onClick={() => console.log(animation.autoplay)}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
    ></LottieIcon>
  );
};

const LottieIcon = styled.div`
  width: ${({ iconWidth }) => (iconWidth ? `${iconWidth}` : '4.3rem')};
  height: ${({ iconHeight }) => (iconHeight ? `${iconHeight}` : '3.2rem')};

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AnimatedIconMemo = React.memo(AnimatedIcon);

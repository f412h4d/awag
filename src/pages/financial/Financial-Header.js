import { gsap } from "gsap";
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AnimatedButtonMemo } from '../../components/Animated-Button';
import { AnimatedIconMemo } from '../../components/Animated-Icon';
import sendIcon from '../../images/send.json';
import financial from '../../images/services.json';

const FinancialHeader = () => {

  const animate = (boxName, primerx) => {
    gsap.fromTo(
      boxName.current,
      {x: primerx, opacity: 0},
      {x: 0, opacity: 1, duration: 1 });
  };

  const picRef = useRef();
  useEffect(() => {
    animate(picRef, 400)
  });

  const textRef = useRef();
  useEffect(() => {
    animate(textRef, -400)
  });

  return (
    <Container>
      <MainTextContainer ref={textRef}>
        <MainText>We help you focus on growth and value creation</MainText>

        <AnimatedButtonMemo
          text={'Send Reqeust'}
          iconHeight={'2rem'}
          iconWidth={'2rem'}
          animationData={sendIcon}
        />
      </MainTextContainer>

      <MainAnimationContainer ref={picRef}>
        <AnimatedIconMemo
          loop={true}
          iconWidth={'550px'}
          iconHeight={'550px'}
          animationData={financial}
        ></AnimatedIconMemo>
      </MainAnimationContainer>
    </Container>
  );
};

const Container = styled.main`
    flex: 1;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    min-height: calc(100vh - 80px);
    width: 100%;
    padding: 20px 100px;

    background-color: #e2fff7;
  `;

  const MainTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 0 50px;
  `;

  const MainText = styled.p`
    font-size: 2.5rem;
    text-align: left;
    color: #3e3e3e;
  `;

  const MainAnimationContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: 100px;
  `;

export const FinancialHeaderMemo = React.memo(FinancialHeader);

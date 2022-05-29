import React from 'react';
import styled from 'styled-components';
import { AnimatedIconMemo } from './Animated-Icon';

const AnimatedContent = ({ header, desc, animation, iconWidth, iconHeight }) => {

  return (
    <Container>
      <MainTextContainer>
        <MainText>{header}</MainText>
        <DescText>{desc}</DescText>
      </MainTextContainer>

      <MainAnimationContainer>
        <AnimatedIconMemo
          loop={true}
          iconWidth={iconWidth !== null ? iconWidth : '550px'}
          iconHeight={iconHeight !== null ? iconHeight : '550px'}
          animationData={animation}
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
  const DescText = styled.p`
    font-size: 1.5rem;
    text-align: left;
    color: #505050;
  `;

  const MainAnimationContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: 100px;
  `;

export const AnimatedContentMemo = React.memo(AnimatedContent);

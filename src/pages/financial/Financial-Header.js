import React from 'react';
import styled from 'styled-components';
import { AnimatedButtonMemo } from '../../components/Animated-Button';
import { AnimatedIconMemo } from '../../components/animated-icon';
import sendIcon from '../../images/send.json';
import financial from '../../images/services.json';

const FinancialHeader = () => {
  const Container = styled.main`
    flex: 1;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    min-height: calc(100vh - 135px);
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

  const MainAnimationContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: 100px;
  `;

  return (
    <Container>
      <MainTextContainer>
        <MainText>We help you focus on growth and value creation</MainText>

        <AnimatedButtonMemo
          text={'Send Reqeust'}
          iconHeight={'2rem'}
          iconWidth={'2rem'}
          animationData={sendIcon}
        />
      </MainTextContainer>

      <MainAnimationContainer>
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

export const FinancialHeaderMemo = React.memo(FinancialHeader);

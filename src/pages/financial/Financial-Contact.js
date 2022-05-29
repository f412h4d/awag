import React from 'react';
import styled from 'styled-components';
import { AnimatedIconMemo } from '../../components/Animated-Icon';
import financialAnalysis from '../../images/financial-analysis-by-employer.json';

const Contact = () => {
  return (
    <Container>
      <Content>
        <div>
          <AnimatedIconMemo
            iconHeight={'600px'}
            iconWidth={'600px'}
            animationData={financialAnalysis}
          />
        </div>
        
      <MainContainer>
        <Title>BECOME A PIONEER OF THE DIGITAL ECONOMY!</Title>

        <Btn>Contact</Btn>
      </MainContainer>

      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;
  width: 100vw;

  background-color: #c1f7e8;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 95vw;
  height: 650px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 250px;

`;

const Title = styled.p`
  padding: 0;
  width: 350px;

  font-size: 30px;
  font-weight: 600;
  line-height: 40px;

  color: #333;
`;

const Btn = styled.a`
  margin: 0 0 1.5rem 0;
  padding: 1.4rem 8.5rem;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;

  color: #fff;
  background-color: #a42424;

  cursor: pointer;
`;

export const ContactMemo = React.memo(Contact);

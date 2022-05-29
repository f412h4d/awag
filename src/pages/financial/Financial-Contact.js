import React from 'react';
import styled from 'styled-components';
import { AnimatedIconMemo } from '../../components/Animated-Icon';
import financialAnalysis from '../../images/financial-analysis-by-employer.json';

const Contact = () => {
  return (
    <Container>
      <ContactContent>
        <ContactAnimation>
          <AnimatedIconMemo
            iconHeight={'170px'}
            iconWidth={'170px'}
            animationData={financialAnalysis}
          />
        </ContactAnimation>

        <ContactTitle>BECOME A PIONEER OF THE DIGITAL ECONOMY!</ContactTitle>

        <ContactBtn>Contact</ContactBtn>
      </ContactContent>
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

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 80vw;
  height: 240px;
`;

const ContactAnimation = styled.div``;

const ContactTitle = styled.p`
  padding: 0 14rem 1.4rem 3rem;

  font-size: 30px;
  font-weight: 600;
  line-height: 40px;

  color: #333;
`;

const ContactBtn = styled.a`
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

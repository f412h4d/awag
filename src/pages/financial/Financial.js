import React from 'react';
import styled from 'styled-components';
import { AnimatedContentMemo } from '../../components/Animated-Content';
import { FooterMemo } from '../../components/Footer';
import team from '../../images/teamwork.json';
import { ContactMemo } from './Financial-Contact';
import { FinancialHeaderMemo } from './Financial-Header';
import { FinancialServicesMemo } from './Financial-Services';
import { StatsMemo } from './Financial-Stats';
import { SwiperMemo } from './Swiper';

const Financial = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: #e2fff7;
  `;

  return (
    <Container>
      <FinancialHeaderMemo></FinancialHeaderMemo>

      <FinancialServicesMemo></FinancialServicesMemo>

      <ContactMemo></ContactMemo>

      <SwiperMemo></SwiperMemo>

      <AnimatedContentMemo
        header={'Our Team'}
        desc={
          'Our team consists of a young but experienced team, with specialists in every area of ​​the financial world. Finance is always a sensitive and complicated subject, so we pride ourselves on our trustworthiness when it comes to your money. Modern technology is merging the digital world with the financial world, so you need professionals who can handle both. We are there for you around the clock! ...'
        }
        animation={team}
        iconWidth={'650px'}
        iconHeight={'650px'}
      ></AnimatedContentMemo>

      <StatsMemo></StatsMemo>

      <FooterMemo></FooterMemo>
    </Container>
  );
};

export const FinancialMemo = React.memo(Financial);

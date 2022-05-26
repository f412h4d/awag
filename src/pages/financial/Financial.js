import React from 'react';
import styled from 'styled-components';
import { AnimatedContentMemo } from '../../components/Animated-Content';
import { FooterMemo } from '../../components/Footer';
import consult from '../../images/financial-consulting.json';
import payment from '../../images/secure-card-payment.json';
import software from '../../images/software.json';
import team from '../../images/teamwork.json';
import { ContactMemo } from './Financial-contact';
import { FinancialHeaderMemo } from './Financial-Header';
import { FinancialServicesMemo } from './Financial-Services';
import { StatsMemo } from './Financial-Stats';

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

      <AnimatedContentMemo
        header={'Consulting & Development'}
        desc={
          'Know-how and experience in the blockchain and financial services industry enable us to offer individual consulting and development services for companies and institutions of all industries and sizes.'
        }
        animation={consult}
        iconWidth={'600px'}
        iconHeight={'600px'}
      ></AnimatedContentMemo>

      <AnimatedContentMemo
        header={'Hardware'}
        desc={
          'Our SX1801 payment terminal is the ideal complement to our crypto payment software. It is suitable for any modern form of digital payments as well as for the operation of additional payment software such as cash register systems.'
        }
        animation={payment}
        iconWidth={'600px'}
        iconHeight={'600px'}
      ></AnimatedContentMemo>

      <AnimatedContentMemo
        header={'Software'}
        desc={
          'Our digital payment software enables your company to accept digital payments in the form of cryptocurrencies such as Bitcoin or Dash easily and risk-free. With its simplicity, speed and security, it offers both end customers and companies a smooth payment experience.'
        }
        animation={software}
        iconWidth={'600px'}
        iconHeight={'600px'}
      ></AnimatedContentMemo>

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

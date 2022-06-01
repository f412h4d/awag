import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AnimatedContentMemo } from '../../components/Animated-Content';
import { FooterMemo } from '../../components/Footer';
import team from '../../images/teamwork.json';
import { ContactMemo } from './Financial-Contact';
import { FinancialHeaderMemo } from './Financial-Header';
import { FinancialServicesMemo } from './Financial-Services';
import { StatsMemo } from './Financial-Stats';
import { Partners } from './Partners';
import { SwiperMemo } from './Swiper';

gsap.registerPlugin(ScrollTrigger);

const Financial = () => {

const contentRef = useRef();

useEffect(() => {
  gsap.fromTo(
    contentRef.current,
    {
      x: -400,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: contentRef.current,
        toggleActions: 'restart none reverse none',
        start: '0 center',
        end: '0 center'
      },
      x: 0,
      opacity: 1,
      duration: .4
    }
  )
})

  return (
    <Container>
      <FinancialHeaderMemo></FinancialHeaderMemo>

      <FinancialServicesMemo></FinancialServicesMemo>

      <ContactMemo></ContactMemo>

      <SwiperMemo></SwiperMemo>

      <div ref={contentRef}>
        <AnimatedContentMemo
          header={'Our Team'}
          desc={
            'Our team consists of a young but experienced team, with specialists in every area of ​​the financial world. Finance is always a sensitive and complicated subject, so we pride ourselves on our trustworthiness when it comes to your money. Modern technology is merging the digital world with the financial world, so you need professionals who can handle both. We are there for you around the clock! ...'
          }
          animation={team}
          iconWidth={'650px'}
          iconHeight={'650px'}
        ></AnimatedContentMemo>
      </div>


      <StatsMemo></StatsMemo>

      <Partners></Partners>

      <FooterMemo></FooterMemo>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;

width: 100%;
height: 100%;
`;

export const FinancialMemo = React.memo(Financial);

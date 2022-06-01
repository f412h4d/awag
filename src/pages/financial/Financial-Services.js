import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import atmImage from '../../images/atm.jpg';
import bitcoinMachine from '../../images/bitcoin-machine.jpg';
import moneyTransfer from '../../images/money-transfer.jpg';
import { ServiceMemo } from './Service';

gsap.registerPlugin(ScrollTrigger);

const FinancialServices = () => {
  
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const cardsRef = useRef();

  const animate = (elem, delay) => gsap.fromTo(
    elem.current,
    {
      x: 400,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: .4,
      delay: delay,
      scrollTrigger:{trigger: cardsRef.current, toggleActions: 'restart none reverse none', start: '-15% center', end: '-15% center'}
    }
  );

useEffect(() => {
    animate(card1Ref, 0);
    animate(card2Ref, .07);
    animate(card3Ref, .14);
});

  return (
    <Container>
      <h2>Our Services</h2>
      
      <ServicesContainer ref={cardsRef}>
        <div ref={card1Ref}>
          <ServiceMemo
            link={'/atm'}
            image={atmImage}
            title={'ATM'}
            description={
              'An ATM can be an asset to your business and provides convenient access for your customers'
            }
          ></ServiceMemo>
        </div>

        <div ref={card2Ref}>
          <ServiceMemo
            link={'/machines'}
            image={bitcoinMachine}
            title={'Bitcoin Machines'}
            description={
              'Do you have an intresting location and are you intrested in cryptocurrencies? Give your custormers the...'
            }
          ></ServiceMemo>
        </div>
      
      <div ref={card3Ref}>
        <ServiceMemo
          link={'/transfer'}
          image={moneyTransfer}
          title={'Money Transfer'}
          description={
            'You earn on every transfer sent and pain out. the more transfers you make,...'
          }
        ></ServiceMemo>
      </div>  
      
      </ServicesContainer>
    </Container>
  );
};

const Container = styled.main`
    flex: 1;
    gap: 20px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 800px;
    width: 100%;
    padding: 20px 0;
  `;

  const ServicesContainer = styled.section`
    gap: 2rem;
    flex: 1;
    display: flex;
    flex-direction: row;

    width: 100%;
    max-width: 930px;
    height: 700px;
    padding: 20px 40px;

    align-items: flex-start;
    justify-content: center;
  `;

export const FinancialServicesMemo = React.memo(FinancialServices);

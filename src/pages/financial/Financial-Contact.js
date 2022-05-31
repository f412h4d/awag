import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedIconMemo } from '../../components/Animated-Icon';
import financialAnalysis from '../../images/financial-analysis-by-employer.json';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const navigate = useNavigate();

  // it dosn't work because scrollbar is not for viewport thats for an element,
  // it will work after fixing scrollbar


  const animate = (boxName, primerx) => {
    gsap.fromTo(
      boxName.current,
      {
        x: primerx,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "restart none reverse none",
          start: '-60% 15%',
          end: '110% 95%'
        },
        x: 0,
        opacity: 1,
        duration: .4
    });
  };

  const containerRef = useRef();

  const picRef = useRef();
  useEffect(() => {
    animate(picRef, -200)
  });

  const textRef = useRef();
  useEffect(() => {
    animate(textRef, 200)
  });

  return (
    <Container ref={containerRef}>
      <Content>
        <div ref={picRef}>
          <AnimatedIconMemo
            iconHeight={'400px'}
            iconWidth={'400px'}
            animationData={financialAnalysis}
          />
        </div>

        <MainContainer ref={textRef}>
          <Title>
            BECOME A PIONEER OF THE DIGITAL ECONOMY!
          </Title>

          <Btn onClick={() => navigate('/contact')}>Contact</Btn>
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
  height: 450px;
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

const Btn = styled.p`
  margin: 0 0 1.5rem 0;
  padding: 1.4rem 8.5rem;

  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;

  color: #fff;
  background-color: #a42424;

  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ContactMemo = React.memo(Contact);

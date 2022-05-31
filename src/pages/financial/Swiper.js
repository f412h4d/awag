import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import { AnimatedContentMemo } from '../../components/Animated-Content';
import consult from '../../images/financial-consulting.json';
import payment from '../../images/secure-card-payment.json';
import software from '../../images/software.json';

gsap.registerPlugin(ScrollTrigger);

const SwiperContent = () => {

  const containerRef = useRef();

  useEffect( () => {
    gsap.fromTo(
      containerRef.current,
      {
        y: 150,
        opacity: 0,
      }, {
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: 'restart none reverse none',
          start: '-20% center',
          end: '-20% center'
        },
        y: 0,
        opacity: 1,
        duration: .4
      }
    )
  });


  return (
    <Container ref={containerRef}>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <AnimatedContentMemo
            header={'Consulting & Development'}
            desc={
              'Know-how and experience in the blockchain and financial services industry enable us to offer individual consulting and development services for companies and institutions of all industries and sizes.'
            }
            animation={consult}
            iconWidth={'600px'}
            iconHeight={'600px'}
          ></AnimatedContentMemo>
        </SwiperSlide>

        <SwiperSlide>
          <AnimatedContentMemo
            header={'Hardware'}
            desc={
              'Our SX1801 payment terminal is the ideal complement to our crypto payment software. It is suitable for any modern form of digital payments as well as for the operation of additional payment software such as cash register systems.'
            }
            animation={payment}
            iconWidth={'600px'}
            iconHeight={'600px'}
          ></AnimatedContentMemo>
        </SwiperSlide>

        <SwiperSlide>
          <AnimatedContentMemo
            header={'Software'}
            desc={
              'Our digital payment software enables your company to accept digital payments in the form of cryptocurrencies such as Bitcoin or Dash easily and risk-free. With its simplicity, speed and security, it offers both end customers and companies a smooth payment experience.'
            }
            animation={software}
            iconWidth={'600px'}
            iconHeight={'600px'}
          ></AnimatedContentMemo>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
    width: 100vw;
    height: 600px;

    background-color: #f4f4f4;
  `;

export const SwiperMemo = React.memo(SwiperContent);

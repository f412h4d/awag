import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css'

import { AnimatedContentMemo } from '../../components/Animated-Content';
import consult from '../../images/financial-consulting.json';
import payment from '../../images/secure-card-payment.json';
import software from '../../images/software.json';


const SwiperContent = () => {

  const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 80px);

    background-color: #f4f4f4;
  `;


  return (
    <Container>
      <Swiper>
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

export const SwiperMemo = React.memo(SwiperContent);



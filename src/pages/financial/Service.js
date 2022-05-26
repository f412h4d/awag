import React from 'react';
import styled, { css } from 'styled-components';
import { AnimatedButtonMemo } from '../../components/Animated-Button';
import reading from '../../images/reading-book.json';

const Service = ({ image, title, description }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    min-height: 490px;
    max-height: 490px;
    border-radius: 0.4rem;

    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  `;

  const ServiceImage = styled.img`
    height: 50%;
    width: 100%;
  `;

  // todo
  const ContentWraper = styled.div``;

  const ServiceDesc = styled.p`
    //  FIXME remove and make a wrapper with flex grow
    min-height: 60px;
    color: #9e9ea4;
    font-size: 0.8rem;
    text-align: center;
    padding: 0 15px 15px 15px;
  `;

  const buttonStyle = css`
    width: 100%;
    position: relative;
    bottom: 0;
    height: 3rem;
    border-radius: 0 0 0.4rem 0.4rem;
    background: hsla(6, 100%, 82%, 1);
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background: hsla(6, 100%, 78%, 1);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
  `;

  const textStyle = css`
    color: #3c3c3c;
    justify-content: center;
  `;

  return (
    <Container>
      <ServiceImage src={image}></ServiceImage>
      <p>{title}</p>
      <ServiceDesc>{description}</ServiceDesc>

      <AnimatedButtonMemo
        customStyle={buttonStyle}
        textStyle={textStyle}
        text={'Continue reading'}
        animationData={reading}
        iconWidth={'5rem'}
        iconHeight={'3.5rem'}
      ></AnimatedButtonMemo>
    </Container>
  );
};

export const ServiceMemo = React.memo(Service);

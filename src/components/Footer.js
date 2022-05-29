import React from 'react';
import styled from 'styled-components';
import logo from '../images/AWAG-financial-white.png';
import facebook from '../images/facebook.json';
import instagram from '../images/instagram.json';
import linkedin from '../images/linkedin.json';
import mail from '../images/mail.json';
import twitter from '../images/twitter.json';
import { AnimatedIconMemo } from './Animated-Icon';

const Footer = () => {
  const Container = styled.footer`
    flex: 1;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: 260px;
    max-height: 260px;
    width: 100%;
    background: black;
  `;

  const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1220px;
    background: black;
  `;

  const LogoSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-content: center;
  `;

  const SocialSection = styled.div`
    display: flex;
    gap: 6px;
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-content: center;
  `;
  const AddressSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-content: center;
  `;

  const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    border-top: 1px #1c1c1c solid;
    min-height: 110px;
    color: white;
  `;

  const CopyRightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    border-top: 1px #1c1c1c solid;
    min-height: 110px;
    color: #62676d;
  `;

  const CopyRightText = styled.p`
    font-size: 0.7rem;
    margin-bottom: 0;
  `;

  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <img src={logo} className='nav-logo' alt='Logo' />
        </LogoSection>

        <SocialSection>
          <AnimatedIconMemo
            iconHeight={'30px'}
            iconWidth={'30px'}
            animationData={facebook}
          ></AnimatedIconMemo>
          <AnimatedIconMemo
            iconHeight={'30px'}
            iconWidth={'30px'}
            animationData={linkedin}
          ></AnimatedIconMemo>
          <AnimatedIconMemo
            iconHeight={'30px'}
            iconWidth={'30px'}
            animationData={twitter}
          ></AnimatedIconMemo>
          <AnimatedIconMemo
            iconHeight={'30px'}
            iconWidth={'30px'}
            animationData={instagram}
          ></AnimatedIconMemo>
          <AnimatedIconMemo
            iconHeight={'40px'}
            iconWidth={'40px'}
            animationData={mail}
          ></AnimatedIconMemo>
        </SocialSection>
        <AddressSection>
          <AddressWrapper>
            <p>+43 1 890 90 99</p>
            <CopyRightText>Seidengasse 45, 1070 Wien</CopyRightText>
          </AddressWrapper>
        </AddressSection>
      </Wrapper>

      <CopyRightSection>
        <p>
          IMPRINT &nbsp;&nbsp;|&nbsp;&nbsp; DATA PROTECTION &nbsp;&nbsp;|&nbsp;&nbsp;
          AFFILIATES &nbsp;&nbsp;|&nbsp;&nbsp; JOB AND CAREER
        </p>
        <CopyRightText>Copyright ©️ AWAG Financial – All rights reserved</CopyRightText>
      </CopyRightSection>
    </Container>
  );
};

export const FooterMemo = React.memo(Footer);
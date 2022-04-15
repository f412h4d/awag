import React from 'react';
import styled from 'styled-components';
import logo from '../images/AWAG-financial-white.png';
import facebook from '../images/facebook.json';
import instagram from '../images/instagram.json';
import linkedin from '../images/linkedin.json';
import mail from '../images/mail.json';
import twitter from '../images/twitter.json';
import { AnimatedIconMemo } from './animated-icon';

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

{
  /* <footer id='Footer' class='clearfix '>
<div class='widgets_wrapper '>
	<div class='container'>
		<div class='column one-third'>
			<aside id='custom_html-2' class='widget_text widget widget_custom_html'>
				<div class='textwidget custom-html-widget'>
					<a href='/'>
						<div class='image_frame image_item no_link scale-with-grid aligncenter no_border'>
							<div class='image_wrapper'>
								<img
									class='scale-with-grid'
									src='/wp-content/uploads/sites/2/2020/12/AWAG-financial-_NEW_Final-09-1.png'
									alt='Awag Financial'
									title=''
									width='200'
								/>
							</div>
						</div>
					</a>
				</div>
			</aside>
		</div>
		<div class='column one-third'>
			<aside id='custom_html-3' class='widget_text widget widget_custom_html'>
				<div class='textwidget custom-html-widget'>
					<div
						class='footer-social'
						style='text-align: center; letter-spacing: 10px;padding-top:5px;'
					>
						<a
							href='https://www.facebook.com/AWAGFINANCIAL'
							target='_blank'
							rel='noopener'
						>
							<i class='icon-facebook' style='color:#fff'></i>
						</a>
						<a
							href='https://www.linkedin.com/company/awagfinancial'
							target='_blank'
							rel='noopener'
						>
							<i class='icon-linkedin' style='color:#fff'></i>
						</a>
						<a
							href='https://instagram.com/awagfinancial?igshid=nh7b8vgvlwci'
							target='_blank'
							rel='noopener'
						>
							<i class='icon-instagram' style='color:#fff'></i>
						</a>
						<a
							href='https://twitter.com/AWAGFinancial'
							target='_blank'
							rel='noopener'
						>
							<i class='icon-twitter' style='color:#fff'></i>
						</a>
						<a href='/kontakt/'>
							<i class='icon-mail' style='color:#fff'></i>
						</a>
					</div>
				</div>
			</aside>
		</div>
		<div class='column one-third'>
			<aside id='custom_html-4' class='widget_text widget widget_custom_html'>
				<div class='textwidget custom-html-widget'>
					<div style='text-align: center;'>
						<h3 style='color: #fcda20;'>
							<a href='tel:+4318909099'>
								<font style='vertical-align: inherit;'>
									<font style='vertical-align: inherit;'>+43 1 890 90 99</font>
								</font>
							</a>
						</h3>
						<p style='color: #fff;'>
							<font style='vertical-align: inherit;'>
								<font style='vertical-align: inherit;'>
									Seidengasse 45, 1070 Vienna
								</font>
							</font>
						</p>
					</div>
				</div>
			</aside>
		</div>
	</div>
</div>
<div class='footer_copy'>
	<div class='container'>
		<div class='column one'>
			<div class='copyright'>
				<div class='fmenu'>
					<div>
						<a href='/impressum'>
							<font style='vertical-align: inherit;'>
								<font style='vertical-align: inherit;'>IMPRINT </font>
							</font>
						</a>
						<a href='/datenschutz'>
							<font style='vertical-align: inherit;'>
								<font style='vertical-align: inherit;'>DATA PROTECTION </font>
							</font>
						</a>
						<a href='/registrierung'>
							<font style='vertical-align: inherit;'>
								<font style='vertical-align: inherit;'>AFFILIATES </font>
							</font>
						</a>
						<a href='/job-und-karriere'>
							<font style='vertical-align: inherit;'>
								<font style='vertical-align: inherit;'>JOB AND CAREER</font>
							</font>
						</a>
					</div>
				</div>
				<font style='vertical-align: inherit;'>
					<font style='vertical-align: inherit;'>
						Copyright ©️ AWAG Financial – All rights reserved
					</font>
				</font>
			</div>
			<ul class='social'></ul>
		</div>
	</div>
</div>
</footer> */
}

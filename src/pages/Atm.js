import React from "react";
import styled from "styled-components";
import { AnimatedButtonMemo } from "../components/Animated-Button";
import sendIcon from "../images/send.json";
import realAtm from "../images/WhatsApp-Image-2020-12-02-at-13.49.48.jpeg";
import secondAtm from "../images/atm-operation-bank-1.jpg";
import thirdAtm from "../images/WhatsApp-Image-2020-12-03-at-14.12.43.jpeg";
import fourthAtm from "../images/WhatsApp-Image-2020-12-03-at-17.04.12.jpeg";
import safe from "../images/AllIsometricJuly1-highRes-20-1.jpg";
import creditIcon1 from "../images/credit-card.png";
import creditIcon2 from "../images/credit-card1.png";
import creditIcon3 from "../images/credit-card2.png";
import { FooterMemo } from "../components/Footer";

const Atm = () => {
  return (
    <Container>
      <ParentSection background="main">
        <ChildSection>
          <TitleOne>ATM Automated Teller Machines</TitleOne>
          <SecondTitle>
            ATMs immediately upgrade a location, increase sales, customer
            frequency and consumer willingness to buy!
          </SecondTitle>

          <Text>
            Cash is still very popular in German-speaking countries and there
            are no indications that this will change in the near future. ATMs
            have been proven to increase customer frequency and thus the
            turnover of every business. It has been proven that a significant
            part of the money withdrawn is spent again in the same location. If
            there are ATMs directly at the location of the business, this
            stimulates the willingness of your customers to spend. Logically, a
            source of money in the immediate vicinity also increases the number
            of impulse purchases.
          </Text>
          <AnimatedButtonMemo
            text={"Send Reqeust"}
            iconHeight={"2rem"}
            iconWidth={"2rem"}
            animationData={sendIcon}
          />
        </ChildSection>
        <BitAtm src={realAtm}></BitAtm>
      </ParentSection>

      <ParentSection background="secondary">
        <HandImage src={secondAtm} alt="" />
        <ChildSection>
          <TitleOne>ATMs as an enrichment for every location</TitleOne>
          <Text>
            In addition to the convenience factor, the on-site security of
            having direct access to cash also plays a major role for consumers.
            Even people who have almost completely switched to card payments
            like to have some cash in their pockets. There could be an emergency
            situation where cash is needed. ATMs offer a convenient 24/7 service
            to customers. It almost doesn't matter at what type of store or
            location the ATM is installed. From retail stores, shopping malls
            and gas stations to events and discos, a wide range of businesses
            are benefiting from the lucrative advantage of ATMs. These provide
            improved customer service as customers like to get their
            transactions done efficiently. At AWAG Financial we are planning
            Specialized in the construction and installation of ATMs. We will
            find the optimal solution for your location and help you generate a
            commercial advantage over the competition.
          </Text>
        </ChildSection>
      </ParentSection>

      <InfoSection>
        <ChildSection>
          <TitleOne>Advantages of ATMs</TitleOne>
          <BenefitList>
            <Benefits>
              Tailor-made solution for your individual location
            </Benefits>
            <Benefits>Customized design on request</Benefits>
            <Benefits>Fair & Transparent - Unbeatable disposal fees</Benefits>
            <Benefits>
              Top quality - robust, durable and suitable for all weather
              conditions
            </Benefits>
            <Benefits>
              Lucrative investment - increase in sales & site upgrading
            </Benefits>
            <Benefits>24/7 cash supply for your customers</Benefits>
            <Benefits>
              The expert solution – own department for planning and installation
            </Benefits>
          </BenefitList>
        </ChildSection>
        <HandImage src={thirdAtm} />
      </InfoSection>

      <LastSectionWrapper>
        <LastSection>
          <LastSectionChildWrapper>
            <LastChild>
              <TinyImage src={creditIcon1} />
              <TinyTitle>INDOOR</TinyTitle>
              <TextCenter>
                The indoor solutions are ideal for entrance areas, shop areas or
                for installation directly in the checkout area...
              </TextCenter>
              <ReadLink>Continue reading</ReadLink>
            </LastChild>
            <LastChild>
              <TinyImage src={creditIcon2} />
              <TinyTitle>OUTDOOR</TinyTitle>
              <TextCenter>
                Cash dispensers for outdoor use are ideally suited to
                well-frequented inner-city locations. They are often found in...
              </TextCenter>
              <ReadLink>Continue reading</ReadLink>
            </LastChild>
            <LastChild>
              <TinyImage src={creditIcon3} />
              <TinyTitle>WALL AND GLASS CONSTRUCTION</TinyTitle>
              <TextCenter>
                Cash dispensers installed through the wall or glass are a very
                effective solution to the ...
              </TextCenter>
              <ReadLink>Continue reading</ReadLink>
            </LastChild>
          </LastSectionChildWrapper>
        </LastSection>
      </LastSectionWrapper>

      <ParentSection background="secondary">
        <ChildSection>
          <TitleOne>Our complete service package for ATMs</TitleOne>
          <BenefitContainer>
            <BenefitColumn>
              <Benefits>Individual analysis</Benefits>
              <Benefits>Planung & Consulting</Benefits>
              <Benefits>Device maintenance & service</Benefits>
              <Benefits>Cash management (reporting)</Benefits>
            </BenefitColumn>
            <BenefitColumn>
              <Benefits>Messaging (Reporting)</Benefits>
              <Benefits>Customized solution</Benefits>
              <Benefits>Reliable support</Benefits>
            </BenefitColumn>
          </BenefitContainer>
        </ChildSection>
        <HandImage src={fourthAtm} />
      </ParentSection>

      <InfoSection>
        <HandImage src={safe} alt="" />
        <ChildSection>
          <TitleOne>security</TitleOne>
          <Text>
            Our ATMs are equipped with an interactive one-time code lock system,
            which is also used in safes with high security regulations. A new
            code is used for each use, which guarantees an extremely high level
            of security. In addition, our devices are equipped with an ink
            coloring system. In the event of a break-in, this system activates,
            coloring the cash and rendering it completely unusable. This type of
            security system deters potential criminals in advance, since
            breaking into such an ATM is completely counterproductive.
          </Text>
        </ChildSection>
      </InfoSection>
      <FooterMemo></FooterMemo>
    </Container>
  );
};

export default Atm;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ParentSection = styled.div`
  width: 100%;
  height: auto;
  background: #94e5cf;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  ${(props) =>
    props.background === "main"
      ? "background : #94e5cf ;"
      : props.background === "secondary"
      ? "background:#ededed;"
      : " background:#92cfd0;"}
`;
const ChildSection = styled.div`
  width: 47.5%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 30px;
`;
const TitleOne = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 15px;
`;
const SecondTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #a42424;
  margin-bottom: 15px;
`;

const Text = styled.div`
  text-align: justify;
  line-height: 32px;
  color: #222;
  margin-bottom: 15px;
`;

const TextCenter = styled.div`
  line-height: 32px;
  color: #222;
  margin-bottom: 15px;
  text-align: center;
  text-align: justify;
  text-align-last: center;
`;

const BitAtm = styled.img`
  max-width: 40%;
  height: auto;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 40px;
`;

const BenefitContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const BenefitColumn = styled.ul`
  width: 40%;
  margin-bottom: 15px;
`;

const BenefitList = styled.ul`
  margin-bottom: 15px;
`;

const Benefits = styled.li`
  color: #222;
  margin-bottom: 8px;
  list-style: none;
  :before {
    content: "✓";
    color: blue;
  }
`;

const HandImage = styled.img`
  margin-bottom: 30px;
  max-width: 100%;
  height: auto;
  max-width: 40%;
  height: auto;
`;

const LastSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LastSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
`;

const LastSectionChildWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const LastChild = styled.div`
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const TinyTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  margin-bottom: 15px;
  color: #050505;
`;

const TinyImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
`;

const ReadLink = styled.a`
  color: #444444;
  width: auto;
  height: auto;
  margin: 30px 0;
  cursor: pointer;
  :visited {
    text-decoration: none;
    outline: 0;
  }
  :focus {
    text-decoration: none;
    outline: 0;
  }
`;

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

      <ParentSection>
        <ChildSection>
          <SecondTitle>You get full technical and legal support.</SecondTitle>
          <TitleOne>Our service:</TitleOne>
          <BenefitList>
            <Benefits>
              AWAG Financial has many technical solutions at its disposal and we
              would be happy to advise you in detail.
            </Benefits>
            <Benefits>
              We support you and your employees with regard to all problems and
              questions.
            </Benefits>
            <Benefits>
              You will be informed about the legal aspects of cooperation and
              registration.
            </Benefits>
            <Benefits>We conduct training courses in many languages.</Benefits>
            <Benefits>
              AWAG Financial supports you and your employees with training and
              billing.
            </Benefits>
          </BenefitList>
        </ChildSection>
        <HandImage src={realAtm} />
      </ParentSection>

      <LastSectionWrapper>
        <TitleOne>What kind of money transfers will you make?</TitleOne>
        <LastSection>
          <LastSectionChildWrapper>
            <LastChild>
              <TinyTitle>money transfer</TinyTitle>
              <TinyImage src={realAtm} />
              <Text>
                Money is transferred securely and directly to major banks around
                the world. Your customers choose the address of the withdrawer
                and the depositing bank directly from their smartphone or
                laptop. Customers can send money on the go and track the status
                of the transfer on their cell phone.
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>cash pickup</TinyTitle>
              <TinyImage src={realAtm} />
              <Text>
                Cash pickup can be arranged at thousands of branches around the
                world. The money is sent and credited to the bank account or to
                the mobile phone (mobile wallet).
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>Mobile Money</TinyTitle>
              <TinyImage src={realAtm} />
              <Text>
                Mobile Money is the electronic wallet service for
                cryptocurrencies. This means that money can be sent to 80
                different countries worldwide in a matter of seconds.
              </Text>
            </LastChild>
          </LastSectionChildWrapper>
        </LastSection>
      </LastSectionWrapper>

      <ParentSection background="secondary">
        <IconsWrapper>
          <IconsBox>
            <Icon src={realAtm} />
          </IconsBox>
          <IconsBox>
            <Icon src={realAtm} />
          </IconsBox>
          <IconsBox>
            <Icon src={realAtm} />
          </IconsBox>
          <IconsBox>
            <Icon src={realAtm} />
          </IconsBox>
        </IconsWrapper>
      </ParentSection>

      <InfoSection>
        <HandImage src={realAtm} alt="" />
        <ChildSection>
          <TitleOne>
            AWAG Financial only works with renowned, reputable partners!
          </TitleOne>
          <SecondTitle>Benefits with these partners</SecondTitle>

          <BenefitList>
            <Benefits>The money transfer is quick and uncomplicated.</Benefits>
            <Benefits>
              Our industry-leading technology protects money so it's guaranteed
              to get there.
            </Benefits>
            <Benefits>
              Fast delivery as 90% of transactions are authorized within
              minutes.
            </Benefits>
            <Benefits>
              The service is inexpensive and the customer anticipates the
              relatively low fees and favorable exchange rates.
            </Benefits>
            <Benefits>No hidden costs for the customer.</Benefits>
          </BenefitList>
        </ChildSection>
      </InfoSection>
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

const BoldText = styled.div`
  text-align: justify;
  line-height: 32px;
  color: #222;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Space = styled.div`
  margin: 20px;
`;

const DownloadWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

const AndroidImage = styled.img`
  margin-right: 8px;
  width: 250px;
  height: 82px;
`;

const IosImage = styled.img`
  width: 250px;
  height: 82px;
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
`;
const BlackSecondTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 0px;
  color: black;
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
    color: red;
  }
`;

const HandImage = styled.img`
  margin-bottom: 30px;
  max-width: 100%;
  height: auto;
  max-width: 40%;
  height: auto;
`;

const TabsWrapper = styled.div`
  width: 40%;
  height: auto;
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TabButtonsWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-width: 0 1px 0 0;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 0;
  padding: 0;
  display: flex;
`;

const TabsButtons = styled.div`
  width: 50%;
  height: 50px;
  background: #ededed;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: #444;
  border-style: solid;
  border-width: 0 1px 0 0;
  border-color: #999999;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease-out;
  ${(props) =>
    props.toggleTabs
      ? `
      :first-child{
        background:white;
        cursor:default;
        border-bottom:none;
      }
      `
      : `
      :nth-child(2){
        background:white;
        cursor:default;
        border-bottom:none;
      } 
    `}
`;

const GrayImgae = styled.img`
  max-width: 100%;
  height: auto;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 60px;
`;

const IconsBox = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: auto;
  height: 100px;
`;

const IconText = styled.div`
  margin: 20px;
  color: #050505;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  letter-spacing: 0px;
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
  font-weight: 700;
  color: #050505;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  margin-bottom: 15px;
`;

const TinyImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

const LastImage = styled.img`
  max-width: 38%;
  height: auto;
`;

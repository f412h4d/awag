import React from "react";
import styled from "styled-components";
import { AnimatedButtonMemo } from "../components/Animated-Button";
import sendIcon from "../images/send.json";
import moneyTransfer from "../images/moneytransfer-1.jpg";
import moneyVector from "../images/4573-1-scaled.jpg";
import moneyCycle from "../images/60026.jpg";
import four from "../images/4.png";
import three from "../images/3.png";
import two from "../images/2.png";
import one from "../images/1-1.png";
import cashIcon from "../images/Cash_Pickup-512.png";
import pickupIcon from "../images/989622-3.png";
import moblieIcon from "../images/mobile.png";
import walletCycle from "../images/4656904.png";

const Transfer = () => {
  return (
    <Container>
      <ParentSection background="main">
        <ChildSection>
          <TitleOne>MONEY TRANSFER</TitleOne>
          <SecondTitle>Send money - fast & safe</SecondTitle>
          <BoldText>
            Unimaginable sums of money are traded around the world every day.
            The majority of financial transactions are pure money transfers that
            are independent of financial investments or goods.
          </BoldText>
          <Text>
            Not only large companies and business people need to send
            international money quickly, but also travelers and people who
            support their families, relatives or friends abroad. You too can
            promote your business by giving your customers the advantage of easy
            and fast money transfers worldwide.
          </Text>
          <AnimatedButtonMemo
            text={"Send Reqeust"}
            iconHeight={"2rem"}
            iconWidth={"2rem"}
            animationData={sendIcon}
          />
        </ChildSection>
        <BitAtm src={moneyTransfer}></BitAtm>
      </ParentSection>

      <InfoSection>
        <HandImage src={moneyVector} alt="" />
        <ChildSection>
          <TitleOne>Why become a Money Transfer Agent?</TitleOne>
          <Text>
            With every person who sends or receives money from you, you have one
            more customer and that means more sales. By offering international
            money transfer from a reputable brand, you increase your traffic.
          </Text>
          <TitleOne>You can get started with a free starter pack!</TitleOne>
          <BenefitList>
            <Benefits>
              Become a Money Transfer Agent and earn money on every transfer you
              make! The more transfers you send or pay out, the higher your
              earnings.
            </Benefits>
            <Benefits>
              You will receive free software from AWAG Financial that is easy to
              use and automatically checks customer data.
            </Benefits>
            <Benefits>
              As a distributor, you get everything you need to promote your
              business. This includes documentation explaining your extended
              services.
            </Benefits>
          </BenefitList>
        </ChildSection>
      </InfoSection>

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
        <HandImage src={moneyCycle} />
      </ParentSection>

      <LastSectionWrapper>
        <TitleOne>What kind of money transfers will you make?</TitleOne>
        <LastSection>
          <LastSectionChildWrapper>
            <LastChild>
              <TinyTitle>money transfer</TinyTitle>
              <TinyImage src={cashIcon} />
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
              <TinyImage src={pickupIcon} />
              <Text>
                Cash pickup can be arranged at thousands of branches around the
                world. The money is sent and credited to the bank account or to
                the mobile phone (mobile wallet).
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>Mobile Money</TinyTitle>
              <TinyImage src={moblieIcon} />
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
            <Icon src={four} />
          </IconsBox>
          <IconsBox>
            <Icon src={three} />
          </IconsBox>
          <IconsBox>
            <Icon src={two} />
          </IconsBox>
          <IconsBox>
            <Icon src={one} />
          </IconsBox>
        </IconsWrapper>
      </ParentSection>

      <InfoSection>
        <HandImage src={walletCycle} alt="" />
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

export default Transfer;

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
  margin-bottom: 40px;
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

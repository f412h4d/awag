import React, { useState } from "react";
import styled from "styled-components";
import { AnimatedButtonMemo } from "../components/Animated-Button";
import sendIcon from "../images/send.json";
import android from "../images/android-app-store-png-app-store-and-android2.png";
import ios from "../images/android-app-store-png-app-store-and-android1.png";
import bitAtm from "../images/bit_ATM1.png";
import hand from "../images/hands.jpg";
import InfoTable from "../components/InfoTable";
import grayAtm from "../images/atm-gray.jpg";
import bitcoin from "../images/crypto-contact-icon-bitcoin-1.png";
import etherium from "../images/crypto-contact-icon-2.png";
import dash from "../images/crypto-contact-icon-dash.png";
import litecoin from "../images/crypto-contact-icon-litecoin.png";
import eth from "../images/crypto-contact-icon-eth-classic.png";
import last from "../images/last.jpg";
import atm from "../images/atmicon.png";
import config from "../images/configurationicon.png";
import ad from "../images/advertisementicon.png";
import business from "../images/business-ideaicon.png";

const Machines = () => {
  const [toggleTabs, setToggleTabs] = useState(true);
  const [oneWay, setOneWay] = useState({
    features: "Purchase of cryptocurrencies",
    display: "7 inches (17.8 cm)",
    size: "32 x 38 x 27 cm",
    lang: "German English",
    montage: "wall mounting",
    weight: "ca. 23 kg",
    energy: "20 Watt",
    precondition: "Internet and electricity connection",
  });
  const [twoWay, setTwoWay] = useState({
    features: "Buying and selling cryptocurrencies",
    display: "23 inches (58.4 cm)",
    size: "62 x 180 x 46 cm",
    lang: "German English",
    montage: "stand",
    weight: "ca. 105 kg",
    energy: "40 Watt",
    precondition: "Internet and electricity connection",
  });

  return (
    <Container>
      <ParentSection background>
        <ChildSection>
          <TitleOne>BITCOIN MACHINES</TitleOne>
          <SecondTitle>Become a presenter!</SecondTitle>
          <Text>
            Do you have an interesting location and are you interested in
            cryptocurrencies? Give your customers the opportunity to
            conveniently buy digital currencies. We would be happy to equip you
            with one of our Bitcoin ATMs.
          </Text>
          <AnimatedButtonMemo
            text={"Send Reqeust"}
            iconHeight={"2rem"}
            iconWidth={"2rem"}
            animationData={sendIcon}
          />
          <Space />
          <SecondTitle>Bitcoin ATM Map mobile apps</SecondTitle>
          <DownloadWrapper>
            <a href="https://play.google.com/store/apps/details?id=com.coinatmradar.android&amp;hl=en">
              <AndroidImage src={android} alt="" />
            </a>
            <a href="https://itunes.apple.com/us/app/coinatmradar/id944855781">
              <IosImage src={ios} alt="" />
            </a>
          </DownloadWrapper>
        </ChildSection>
        <BitAtm src={bitAtm}></BitAtm>
      </ParentSection>

      <InfoSection>
        <ChildSection>
          <TitleOne>
            Do you have an ideal location and are you interested in
            cryptocurrencies?
          </TitleOne>
          <Text>
            Become a presenter! All you need is a basic power and internet
            connection and a high traffic location. You give your customers the
            opportunity to conveniently buy digital currencies. We provide you
            with a high-quality Bitcoin machine for FREE.
          </Text>
          <BlackSecondTitle>your benefits</BlackSecondTitle>
          <BenefitList>
            <Benefits>
              You appear modern and future-oriented, at the same time you
              conquer a new customer segment and still earn money with it.
            </Benefits>
            <Benefits>
              Location optimization and increase in customer frequency
            </Benefits>
            <Benefits>
              Competitive advantage for your business, regardless of the
              industry.
            </Benefits>
            <Benefits>Profit Sharing & Support of ATMS</Benefits>
          </BenefitList>
          <HandImage src={hand} alt="" />
        </ChildSection>
        <TabsWrapper>
          <TabButtonsWrapper>
            <TabsButtons
              onClick={() => {
                setToggleTabs(true);
              }}
              toggleTabs={toggleTabs}
            >
              ONE-Way machine (purchase only)
            </TabsButtons>
            <TabsButtons
              onClick={() => {
                setToggleTabs(false);
              }}
              toggleTabs={toggleTabs}
            >
              TWO-Way machine (buy/sell)
            </TabsButtons>
          </TabButtonsWrapper>
          <InfoTable
            toggleTabs={toggleTabs}
            info={toggleTabs ? oneWay : twoWay}
          ></InfoTable>
        </TabsWrapper>
      </InfoSection>

      <ParentSection>
        <GrayImgae src={grayAtm} />
        <ChildSection>
          <TitleOne>Become a sales partner of Bitcoin ATMs</TitleOne>
          <Text>
            The uncertain economic situation increases people's need to have an
            alternative to cash as a reserve. The desire for financial security
            and security plays a major role. Cryptocurrencies have become a
            popular investment in recent years.
          </Text>
          <TitleOne>Cryptocurrencies are trending</TitleOne>
          <Text>
            Among the cryptocurrencies, Bitcoin is the most popular. What
            initially seemed alien to most people now enjoys relatively broad
            acceptance across all social classes. The ever-increasing trust in
            cryptocurrencies lies in the nature of this currency, it is
            decentralized, extremely secure thanks to blockchain and guarantees
            anonymity when making payments. More and more shops are now
            accepting cryptocurrencies as payment methods, which only benefits
            this digital form of currency even more.
          </Text>
          <TitleOne>
            Bitcoin Automat as an entry aid for those interested in Bitcoin
          </TitleOne>
          <Text>
            With the increasing popularity of Bitcoins & Co, many people are
            wondering how they can acquire them. For the layman, entering the
            world of cryptocurrencies is rather difficult. It is not uncommon
            for registration to be required in online exchanges, which sometimes
            require complicated procedures for acquiring digital currencies. Of
            course, that quickly puts you off. The solution to the problem is a
            Bitcoin machine that makes it easy for anyone interested to get
            started. Buying and selling cryptocurrencies quickly, easily and
            securely, e.g. B. Bitcoin, Litecoin, Ether, DASH or Bitcoin Cash is
            thus possible.
          </Text>
        </ChildSection>
      </ParentSection>

      <IconsWrapper>
        <IconsBox>
          <Icon src={bitcoin} />
          <IconText>Bitcoin</IconText>
        </IconsBox>
        <IconsBox>
          <Icon src={etherium} />
          <IconText>Etherium</IconText>
        </IconsBox>
        <IconsBox>
          <Icon src={dash} />
          <IconText>Dash</IconText>
        </IconsBox>
        <IconsBox>
          <Icon src={litecoin} />
          <IconText>Litecoin</IconText>
        </IconsBox>
        <IconsBox>
          <Icon src={eth} />
          <IconText>Eth Classic</IconText>
        </IconsBox>
      </IconsWrapper>

      <LastSectionWrapper>
        <TitleOne>Our services</TitleOne>
        <LastSection>
          <LastSectionChildWrapper>
            <LastChild>
              <TinyTitle>ATM</TinyTitle>
              <TinyImage src={atm} />
              <Text>
                We only use the latest generation of Bitcoin ATMs, which are
                easy to use and easy to use. With AWAG Financial you have a
                reliable partner in the background, because the satisfaction of
                our customers is important to us.
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>Installation</TinyTitle>
              <TinyImage src={config} />
              <Text>
                We build and install the latest generation of ATM Bitcoin
                machines that guarantee convenient operation and make buying
                digital currencies child's play.
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>Brandmarketing</TinyTitle>
              <TinyImage src={ad} />
              <Text>
                As a BTM sales partner, your location or your company will
                receive marketing support in the form of increased visibility on
                the web.
              </Text>
            </LastChild>
            <LastChild>
              <TinyTitle>requirements</TinyTitle>
              <TinyImage src={business} />
              <Text>
                ATM bitcoin machines only need electricity (230V) including a
                stable internet connection.
              </Text>
            </LastChild>
          </LastSectionChildWrapper>
          <LastImage src={last} />
        </LastSection>
      </LastSectionWrapper>
    </Container>
  );
};

export default Machines;

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
    props.background ? "background : #94e5cf ;" : "background:#ededed;"}
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
  width: 326px;
  height: 500px;
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
`;

const HandImage = styled.img`
  margin-bottom: 30px;
  max-width: 100%;
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
  height: 250px;
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
  width: 56%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const LastChild = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const TinyTitle = styled.div`
  font-weight: 700;
  color: #050505;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 2px;
  margin-bottom: 15px;
`;

const TinyImage = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
`;

const LastImage = styled.img`
  max-width: 38%;
  height: auto;
`;

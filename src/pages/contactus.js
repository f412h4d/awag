import React from "react";
import styled from "styled-components";
import contactImage from "../images/best-contact-us-pages-760x400.png";
import gpsImage from "../images/gps.png";
import phoneImage from "../images/phone.svg";

const ContactUs = () => {
  return (
    <Container>
      <Image src={contactImage} alt="contact us"></Image>
      <Title>CONTACT US</Title>
      <Wrapper>
        <Box>
          <Icon src={phoneImage}></Icon>
          <BoxTitle>PHONE</BoxTitle>
          <BoxText>+43 1 890 90 99</BoxText>
        </Box>
        <Box>
          <Icon src={gpsImage}></Icon>
          <BoxTitle>LOCATION</BoxTitle>
          <BoxText>Seidengasse 45, 1070 Vienna</BoxText>
        </Box>
      </Wrapper>
      <SecondTitle>LETS TALK</SecondTitle>

      <Form>
        <HalfLeft>
          <Input type="text" id="input-name" placeholder="Name" />
          <Input type="email" id="input-email" placeholder="Email address" />
          <Input type="phone" id="input-subject" placeholder="phone" />
          <Input type="text" id="input-subject" placeholder="Subject" />
        </HalfLeft>
        <HalfRight>
          <Textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
          ></Textarea>
        </HalfRight>
        <Submit type="submit" value="Submit" id="input-submit" />
      </Form>
    </Container>
  );
};

export default ContactUs;

const Container = styled.div`
  width:100%
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  overflow-y: hidden;
`;
const Title = styled.h1`
  font-size: 34px;
  margin-top: 90px;
`;

const Wrapper = styled.div`
  margin-top: 70px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 500px;
  height: 300px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid blue;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  width: 64px;
  height: 64px;
`;

const SecondTitle = styled.h2`
  font-size: 30px;
  margin-top: 90px;
`;

const BoxTitle = styled.p`
  font-size: 24px;
  margin-top: 20px;
`;

const BoxText = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const Form = styled.form`
  background: rgba(241, 241, 241, 0.6);
  width: auto;
  height: auto;
  padding: 40px;
  border-radius: 10px;
  max-width: 900px;
  text-align: center;
  margin: 20px 0px;
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 1em;
  border-radius: 8px;
  display: block;
  width: 80%;
  margin-top: 1em;
  box-shadow: 0 1px 1px rgba(black, 0.1);
  resize: none;
  &:focus {
    box-shadow: 0 0px 2px rgba($red, 1) !important;
    border: 1px solid black;
  }
`;
const Textarea = styled.textarea`
  border: 0;
  outline: 0;
  padding: 1em;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  box-shadow: 0 1px 1px rgba(black, 0.1);
  resize: none;
  height: 176px;
  &:focus {
    box-shadow: 0 0px 2px rgba($red, 1) !important;
    border: 1px solid black;
  }
`;

const Submit = styled.input`
  border: 0;
  outline: 0;
  padding: 1em;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  box-shadow: 0 1px 1px rgba(black, 0.1);
  resize: none;
  &:focus {
    box-shadow: 0 0px 2px rgba($red, 1) !important;
  }
  color: white;
  background: #e74c3c;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 1px 1px rgba(#aaa, 0.6);
  }
`;
const HalfLeft = styled.div`
  float: left;
  width: 45%;
  margin-bottom: 1em;
  margin-right: 2%;
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
`;
const HalfRight = styled.div`
  float: left;
  width: 45%;
  margin-bottom: 1em;
  width: 50%;
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
`;

import React from "react";
import styled from "styled-components";
import OneWayAtm from "../images/one_way_atm1.png";
import TwoWayAtm from "../images/two_way_atm1.png";

const InfoTable = ({ toggleTabs, info }) => {
  return (
    <InfoContainer>
      <InfoPicture
        src={toggleTabs ? OneWayAtm : TwoWayAtm}
        alt=""
      ></InfoPicture>
      <Table>
        <TBody>
          <TR>
            <TDLeft>Features:</TDLeft>
            <TDright>{info.features}</TDright>
          </TR>
          <TR>
            <TDLeft>Display:</TDLeft>
            <TDright>{info.display}</TDright>
          </TR>
          <TR>
            <TDLeft>Size:</TDLeft>
            <TDright>{info.size}</TDright>
          </TR>
          <TR>
            <TDLeft>Language:</TDLeft>
            <TDright>{info.lang}</TDright>
          </TR>
          <TR>
            <TDLeft>Montage:</TDLeft>
            <TDright>{info.montage}</TDright>
          </TR>
          <TR>
            <TDLeft>Weight:</TDLeft>
            <TDright>{info.weight}</TDright>
          </TR>
          <TR>
            <TDLeft>Energy requirement: </TDLeft>
            <TDright>{info.energy}</TDright>
          </TR>
          <TR>
            <TDLeft>Precondition:</TDLeft>
            <TDright>{info.precondition}</TDright>
          </TR>
        </TBody>
      </Table>
    </InfoContainer>
  );
};

export default InfoTable;

const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoPicture = styled.img`
  width: auto;
  height: 300px;
  margin: 20px 0;
`;

const Table = styled.table`
  width: 96%;
  margin-bottom: 15px;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  border: 1px solid #999999;
  margin: 20px 0 40px 0;
`;
const TBody = styled.tbody``;
const TR = styled.tr`
  :nth-child(even) {
    background: rgba(0, 0, 0, 0.01);
  }
`;

const TDLeft = styled.td`
  width: 40%;
  height: 50px;
  border: 1px solid #e6e6e6;
  color: #9e9ea4;
  text-align: center;
`;
const TDright = styled.td`
  width: 60%;
  height: 50px;
  border: 1px solid #e6e6e6;
  color: #999;
  font-weight: 600;
  text-align: center;
`;

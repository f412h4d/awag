import React from 'react';
import styled from 'styled-components';
import coronavirus from '../../images/coronavirus.png';
import branch from '../../images/branch.png';
import moneyTtransfer from '../../images/money-transfer.png';
import receipt from '../../images/receipt.png';

const Stats = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    margin: 0 0 50px 0;
  `;

  const StatsTitle = styled.h2`
    margin: 40px 0;
    color: #333;

    letter-spacing: 2px;
    font-weight: bold;
  `;

  const StatsCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 95vw;
    height: 433px;
  `;

  const StatCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 305px;

    &:nth-child(1) {
      background-color: #86caa0;
    }
    &:nth-child(2) {
      background-color: #a7e6ef;
    }
    &:nth-child(3) {
      background-color: #f9f56d;
    }
    &:nth-child(4) {
      background-color: #f6aebc;
    }
  `;

  const StatNum = styled.div`
    margin-top: -50px;

    font-size: 30px;
    color: #444;
    letter-spacing: 1px;
  `;

  const StatTitle = styled.div`
    margin-bottom: 50px;

    font-weight: 700;
  `;

  return (
    <Container>
      <StatsTitle>
      Some numbers about us
      </StatsTitle>

      <StatsCards>
        <StatCard>
          <img src={coronavirus}></img>

          <StatNum>150</StatNum>

          <StatTitle>Contries</StatTitle>
        </StatCard>

        <StatCard>
          <img src={branch}></img>

          <StatNum>120000</StatNum>

          <StatTitle>Locations worldwide</StatTitle>
        </StatCard>

        <StatCard>
          <img src={moneyTtransfer}></img>

          <StatNum>400000</StatNum>

          <StatTitle>Monthly Transactions</StatTitle>
        </StatCard>

        <StatCard>
          <img src={receipt}></img>

          <StatNum>1350000</StatNum>

          <StatTitle>Customers worldwide</StatTitle>
        </StatCard>
      </StatsCards>
    </Container>
  );
};

export const StatsMemo = React.memo(Stats);
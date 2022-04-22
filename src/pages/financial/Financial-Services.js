import React from 'react';
import styled from 'styled-components';
import atmImage from '../../images/atm.jpg';
import bitcoinMachine from '../../images/bitcoin-machine.jpg';
import moneyTransfer from '../../images/money-transfer.jpg';
import { ServiceMemo } from './Service';

const FinancialServices = () => {
  const Container = styled.main`
    flex: 1;
    gap: 20px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: calc(100vh - 80px);
    width: 100%;
    padding: 20px 0;
  `;

  const ServicesContainer = styled.section`
    gap: 2rem;
    flex: 1;
    display: flex;
    flex-direction: row;

    width: 100%;
    max-width: 930px;
    height: 100%;
    padding: 10px 40px;

    align-items: flex-start;
    justify-content: center;
  `;

  return (
    <Container>
      <h2>Our Services</h2>
      <ServicesContainer>
        <ServiceMemo
          image={atmImage}
          title={'ATM'}
          description={
            'An ATM can be an asset to your business and provides convenient access for your customers'
          }
        ></ServiceMemo>
        <ServiceMemo
          image={bitcoinMachine}
          title={'Bitcoin Machines'}
          description={
            'Do you have an intresting location and are you intrested in cryptocurrencies? Give your custormers the...'
          }
        ></ServiceMemo>
        <ServiceMemo
          image={moneyTransfer}
          title={'Money Transfer'}
          description={
            'You earn on every transfer sent and pain out. the more transfers you make,...'
          }
        ></ServiceMemo>
      </ServicesContainer>
    </Container>
  );
};

export const FinancialServicesMemo = React.memo(FinancialServices);

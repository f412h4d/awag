import React from 'react';
import styled from 'styled-components';

const Marketing = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      <p>Marketing</p>
    </Container>
  );
};

export const MarketingMemo = React.memo(Marketing);

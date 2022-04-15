import React from 'react';
import styled from 'styled-components';

const Investment = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      <p>Investment</p>
    </Container>
  );
};

export const InvestmentMemo = React.memo(Investment);

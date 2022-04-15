import React from 'react';
import styled from 'styled-components';

const Financial = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      <p>Financial</p>
    </Container>
  );
};

export const FinancialMemo = React.memo(Financial);

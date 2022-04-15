import React from 'react';
import styled from 'styled-components';

const Insurance = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

  return (
    <Container>
      <p>Insurance</p>
    </Container>
  );
};

export const InsuranceMemo = React.memo(Insurance);

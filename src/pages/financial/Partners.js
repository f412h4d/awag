import React from 'react';
import styled from 'styled-components';
import { PartnersSlider } from './PartnersSlider';

export const Partners = () => {
  return (
    <PartnersSection>
      <PartnersTitle>Our Partners</PartnersTitle>

      <PartnersSlider />
    </PartnersSection>
  );
};

const PartnersSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 50px 0;
`;

const PartnersTitle = styled.h2`
  margin: 50px 0;
  color: #333;

  letter-spacing: 2px;
  font-weight: bold;
`;

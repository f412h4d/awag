import React from 'react';
import investment from '../images/investment.json';
import Page from '../Page';

const Investment = () => {
  return (
    <section id='investment'>
      <Page
        title1={'Investment'}
        title2={'Is Now'}
        title3={'Easy & Secure'}
        subtitle={'Best for investors seeking new investment opportunities'}
        animation={investment}
      ></Page>
    </section>
  );
};

export const InvestmentMemo = React.memo(Investment);

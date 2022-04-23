import React from 'react';
import insurance from '../images/insurance.json';
import Page from '../Page';

const Insurance = () => {
  return (
    <section id='insurance'>
      <Page
        title1={'You Are'}
        title2={'Safe'}
        title3={'With Us'}
        subtitle={
          'We have a range of simple, flexible and best-value Life Insurance products to give you, and your loved ones, peace of mind.'
        }
        animation={insurance}
      ></Page>
    </section>
  );
};

export const InsuranceMemo = React.memo(Insurance);

import React from 'react';
import marketing from '../images/marketing.json';
import Page from '../Page';

const Marketing = () => {
  return (
    <section id='marketing'>
      <Page
        title1={'The World'}
        title2={'Is Watching'}
        title3={'You'}
        subtitle={
          'Boost your brand’s by integrating all marketing tools to reach your target audience.'
        }
        animation={marketing}
      ></Page>
    </section>
  );
};

export const MarketingMemo = React.memo(Marketing);

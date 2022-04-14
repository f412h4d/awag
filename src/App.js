import React from 'react';
import './App.css';
import insurance from './images/insurance.json';
import investment from './images/investment.json';
import marketing from './images/marketing.json';
import services from './images/services.json';
import Navbar from './Navbar';
import Other from './Other';
import Page from './Page';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <section id='investment'>
        <Page
          title1={'Investment'}
          title2={'Is Now'}
          title3={'Easy & Secure'}
          subtitle={'Best for investors seeking new investment opportunities'}
          animation={investment}
        ></Page>
      </section>

      <section id='insurance'>
        <Other
          title1={'You Are'}
          title2={'Safe'}
          title3={'With Us'}
          subtitle={
            'We have a range of simple, flexible and best-value Life Insurance products to give you, and your loved ones, peace of mind.'
          }
          animation={insurance}
        ></Other>
      </section>

      <section id='marketing'>
        <Other
          title1={'The World'}
          title2={'Is Watching'}
          title3={'You'}
          subtitle={
            'Boost your brand’s by integrating all marketing tools to reach your target audience.'
          }
          animation={marketing}
        ></Other>
      </section>

      <section id='financial-services'>
        <Other
          title1={'Anything'}
          title2={'You Need'}
          title3={'For Your Financials'}
          subtitle={
            'Enjoy our secure financial services to help you grow your business and protect your assets.'
          }
          animation={services}
        ></Other>
      </section>
    </>
  );
}

export default App;

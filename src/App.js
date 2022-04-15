import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './Navbar';
import { FinancialMemo } from './pages/financial/Financial';
import { InsuranceMemo } from './pages/Insurance';
import { InvestmentMemo } from './pages/Investment';
import { MarketingMemo } from './pages/Marketing';

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Main = styled.main`
    height: calc(100vh - 95px);
  `;

  const RouterPages = (
    <Wrapper>
      <Navbar></Navbar>

      <Main>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/financial' />} />

          <Route path='financial' element={<FinancialMemo />} />

          <Route path='/marketing' element={<MarketingMemo />} />

          <Route path='/insurance' element={<InsuranceMemo />} />

          <Route path='/investment' element={<InvestmentMemo />} />
        </Routes>
      </Main>
    </Wrapper>
  );

  return RouterPages;
}

export default App;

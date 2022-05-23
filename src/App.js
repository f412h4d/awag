import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { BtnNavbar } from './BtnNavbar';
import { PostMemo } from './components/Post';
import Navbar from './Navbar';
import Atm from './pages/Atm';
import { BlogMemo } from './pages/blog/Blog';
import ContactUs from './pages/contactus';
import { FinancialMemo } from './pages/financial/Financial';
import { InsuranceMemo } from './pages/Insurance';
import { InvestmentMemo } from './pages/Investment';
import Machines from './pages/Machines';
import { MarketingMemo } from './pages/Marketing';
import Register from './pages/register';
import Transfer from './pages/Transfer';

const App = () => {
  const path = useLocation().pathname;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Main = styled.main`
    height: ${path !== '/register' ? 'calc(100vh - 95px)' : '100vh'};
    overflow-y: scroll;
    overflow-x: hidden;
  `;

  const RouterPages = (
    <Wrapper>
      {path !== '/register' && <Navbar></Navbar>}

      {path !== '/register' && <BtnNavbar></BtnNavbar>}

      <Main>
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/financial' />} />

          <Route path='/blog' element={<BlogMemo />} />

          <Route path='/post' element={<PostMemo />} />

          <Route path='/financial' element={<FinancialMemo />} />

          <Route path='/marketing' element={<MarketingMemo />} />

          <Route path='/insurance' element={<InsuranceMemo />} />

          <Route path='/investment' element={<InvestmentMemo />} />

          <Route path='/contact' element={<ContactUs />} />

          <Route path='/register' element={<Register />} />

          <Route path='/machines' element={<Machines />} />

          <Route path='/transfer' element={<Transfer />} />

          <Route path='/atm' element={<Atm />} />

          <Route path='*' element={<Navigate replace to='/financial' />} />
        </Routes>
      </Main>
    </Wrapper>
  );

  return RouterPages;
};

export default App;

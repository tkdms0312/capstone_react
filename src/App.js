// import 'semantic-ui-css/semantic.min.css'
import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Nav';
import Portfolio from './components/portfolio';
import Rebalancing from './components/rebalancing';
import Mybudget from './components/mybudget';
import Mypage from './components/mypage';
// 각 페이지 구성요소를 따로 만듬

function App() {
  return (
    <BrowserRouter> {/* 사실 얘는 무슨역할인지 몰라... */}
      <Navigation /> {/* 네비게이션 페이지는 따로 만들어서 한줄로 넣고 */}
      <Routes>
        <Route path="/portforlio" element={<Portfolio />} />
        <Route path="/rebalancing" element={<Rebalancing />} />
        <Route path="/mybudget" element={<Mybudget />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
// import 'semantic-ui-css/semantic.min.css'
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Nav';
import Portfolio from './components/portfolio';
import Rebalancing from './components/rebalancing';
import Mybudget from './components/mybudget';
import Mypage from './components/mypage';
import Main from './components/main';
import Login from './login';
import loginHandle from './loginHandle';
import { redirect } from 'react-router-dom';
// 각 페이지 구성요소를 따로 만듬

const isLogin = true

function App () {

    return (
      <BrowserRouter> {/* 사실 얘는 무슨역할인지 몰라... */}
      {/* <loginHandle.Provider value={this.state}> 얘는 로그인 상태 저장하는 그런거*/}
        <Navigation /> {/* 네비게이션 페이지는 따로 만들어서 한줄로 넣고 */}
        {/* <Main /> */}
        {/* <Route path="/login/kakao" render={() => (isLogin ? <redirect to="/" /> : <Login />)}/> */}
        <Login />
        <Routes>
          <Route path="/portforlio" element={<Portfolio />} />
          <Route path="/rebalancing" element={<Rebalancing />} />
          <Route path="/mybudget" element={<Mybudget />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      {/* </loginHandle.Provider> */}
      </BrowserRouter>
    );
}

export default App;
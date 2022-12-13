import React, { Route, useState, useEffect,Component } from 'react';
import axios from 'axios'
import { Navigate, useNavigate, redirect, BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './mypage.css'



function Mypage(){ //주식 차트 보여주기
  

  return (
    <div className="mypage">
      <div className="ui negative message">
      <i class="close icon"></i>
      <p><h4>로그인 하세요</h4></p>
      </div>
    </div>
  
    );
}

export default Mypage;
import React, { Route, useState, useEffect,Component } from 'react';
import './login.css';
import loginButton from './img/kakao_login.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Cookies, Cookies } from "react-cookie"
import Portfolio from './components/portfolio';
import Mypage from './components/mypage';
import Mybudget from './components/mybudget';
import Rebalancing from './components/rebalancing';


function Login() {
  const nav = useNavigate();
  
  const [modal,setModal] = useState();
  const [nickName,setParam] = useState('');
  // const cookies = new Cookies()

  const signIn = async () =>{
    axios.get("http://13.125.140.171/user" , {
      // params: { userid : 1 }, 
      // withCredentials: true
    }).then(function (response) {
      console.log(JSON.stringify(response, null, 2));
      nav("mybudget")
      const user = JSON.stringify(response.data.nickName)
      setParam(response.data.nickName)
      setModal('1')
      localStorage.setItem("nickName", response.data.nickName)
    });

  
  }

  const kakaoSign = async () =>{
    axios.get("http://13.125.140.171/login/kakao", {
    }).then(function (response) {
      console.log(response);
      console.log(JSON.stringify(response, null, 2));
      if(response=="existMember"){
        setModal('1')
      }
      //nav("mybudget")
      // const user = JSON.stringify(response.data.nickName)
      // setParam(response.data.nickName)
      // setModal('1')
      // localStorage.setItem("nickName", response.data.nickName)
    });
  }

    return (
      <div className="Login">
          <aside> {/*오른쪽에 로그인버튼 부분 */}
              <div className="LoginButton" >
                  {/* <button id="custom-login-btn" onClick={signIn}><img src={loginButton} width="150"/></button> */}
                  {modal == "1" ?  <button className="ui purple basic button" >{nickName} 님 안녕하세요</button> 
                  : 
                  // <button className="custom" onClick={signIn}><img src={loginButton} width="150"/></button>
                  <button class="ui yellow button" onClick={signIn}>로그인하기</button>}
                  {/* {modal == "1" ?  <button className="ui purple basic button" >{nickName} 님 안녕하세요</button> 
                  : <button id="custom-login-btn" onClick={kakaoSign}><img src={loginButton} width="150"/></button>} */}
                  {/* <button className="ui purple basic button" >testUser 님 안녕하세요</button> */}
              </div>
          </aside>

      </div>
    );
}


export default Login;
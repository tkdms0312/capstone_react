import React, { Route, useState, useEffect,Component } from 'react';
import './login.css';
import loginButton from './img/kakao_login.png'
import axios from 'axios'
import { Navigate, useNavigate, redirect } from 'react-router-dom';
import Mypage from './components/mypage';



function Login() {
  const [state, setState] = useState();
  const nav = useNavigate();

  const signIn = () =>{
    axios ({
      method: "GET",
      url: 'http://13.125.140.171/login/kakao/test'
    }).then(function (response) {
      console.log(response);
      if (response.data == 1){
        setState(1); // state의 값을 1로 변경
        nav("mypage")
      }
    });
  
  }

    return (
      <div class="Login">
          <aside> {/*오른쪽에 로그인버튼 부분 */}
              <div className="LoginButton" >
                  {/* <a href="http://13.125.140.171/login/kakao" id="custom-login-btn" onClick={signIn}><img src={loginButton} width="150"/></a> */}
                  <button id="custom-login-btn" onClick={signIn}><img src={loginButton} width="150"/></button>
              </div>
          </aside>
      </div>
    );
}


export default Login;
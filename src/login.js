import React, { useState, useEffect } from 'react';
import './login.css';
import loginButton from './img/kakao_login.png'
import axios from 'axios'


function Login() {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
      setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  }

// // login 버튼 클릭 이벤트
//   const onClickLogin = () => {
//       console.log('click login')
//   }

// 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(() => {
      axios.get('http://13.125.140.171/user')
      .then(res => console.log(res))
      .catch()
  },
  // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  [])

  return (
    <div class="Login">
        <aside> {/*오른쪽에 로그인버튼 부분 */}
            <div className="LoginButton" >
                <a href="http://13.125.140.171/login/kakao" id="custom-login-btn"><img src={loginButton} width="150"/></a>
            </div>
        </aside>
    </div>
  );
}

export default Login;
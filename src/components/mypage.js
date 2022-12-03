import React, { Route, useState, useEffect,Component } from 'react';
import axios from 'axios'
import { Navigate, useNavigate, redirect, BrowserRouter } from 'react-router-dom';
import Login from '../login';
import 'semantic-ui-css/semantic.min.css'
import { Button, Segment } from "semantic-ui-react";
function Mypage(){
  const [modal,setModal] = useState();
  const [nickName,setParam] = useState('');

  useEffect(() => {
    if (localStorage.getItem('nickName') === null) {
      window.location.replace('http://localhost:3000/')
    }
    else {


    }
  }, []);

  return (
    //     <div className="Mypage">
    //         <aside> {/*오른쪽에 로그인버튼 부분 */}
    //             <div className="logedin" >
    //                 <Segment basic textAlign={"aside"}>
    //                 <button class="ui purple basic button" >testUser님 안녕하세요</button>
    //                 </Segment>
    //             </div>
    //         </aside>
    //     </div>
    
    <div>
      <h3>담은 주식이 없습니다.</h3>

    </div>
  
    );
}

export default Mypage;
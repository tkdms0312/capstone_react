import React, {Component, useState} from 'react';
import axios from 'axios';
import './rebalancing.css';
import { Button, Segment } from "semantic-ui-react";
import date from './duration'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, useNavigate } from "react-router-dom"
import Modal from 'react-modal'

function Rebalancing(){ //주기 입력해서 리밸런싱 해주는거
    // // let nav = useNavigate();
    
    // // const duration = () => {
    // //     nav("/duration");
    // // }

    // const rebalancing = () =>{
    axios({
            method: 'post',
            url: 'http://13.125.140.171/rebalancing/auto/test',
            data: {
                cost:100000, //비용
                stockList:[
                    "005930",
                    "055550",
                    "012030",
                    "114800",
                    "024110"
                ]
            }
          }).then(function (response) {
          console.log(response.data);
    });
      

    // if ( useState("http://13.125.140.171/login/kakao/test")==true ) {
    //     return (
    //         <div className="Rebalancing">
    //             <Segment basic textAlign={"center"}>
    //             <Button style={{textAlign: "center", margin: 50}} onClick={duration} size="massive" >주기 입력</Button>
    //             </Segment>
    //         </div>
           
    //         );
    //   } else {
    //     return (
    //     <h3>로그인 하세요</h3>
    //     );
    
        
    // }
    
}

export default Rebalancing;
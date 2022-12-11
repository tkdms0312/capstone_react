import React, { useState} from 'react';
import axios from 'axios';
import './portfolio.css';
import { Button, Segment, Form } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';
import Duration from './duration'

function Portfolio(){ //주기 입력해서 리밸런싱 해주는거
    const submitHandler = (e) => {
        
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        //console.log(stocks);
    
        let requestbody = {
            // cost:cost,
            // stockList : stocks
        };
    
        console.log(JSON.stringify(requestbody));

        axios
          .post("http://13.125.140.171/rebalancing/date", requestbody)
          .then((res) => {
            console.log(res);
            // setResdata(res.data.orderList.map((st, index) => ({
            //     stockId: res.data.orderList[index].stockId,
            //     rate: res.data.orderList[index].rate,
            //     quantity: res.data.orderList[index].quantity,
            //     price: res.data.orderList[index].price
            // })))
            // console.log(resData);
            // setModal(1);
            // resData.map((st) => ( console.log(st.stockId))) //해결
            
        });
      };
    
    return(
        <div className="Rebalancing">
            <Duration />
        </div>

    );
}

export default Portfolio;
import React, {Component, useState} from 'react';
import axios from 'axios';
//import './rebalancing.css';
import portfolio from './portfolio'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, useNavigate } from "react-router-dom"
import Modal from 'react-modal'
//import Login from '../login';

function Trade(resList){ //주기 입력해서 리밸런싱 해주는거
    
    const trans = (e) => {
        console.log(resList);
        //resList.map((stc) => (
            axios.get('http://13.125.140.171/kis/order',{
                params:{
                    stockId: resList.stockId,
                    quantity: resList.quantity
                }
            }).then((response) =>{
                console.log(response);
            })
        //));

    }
    
    
    return(
        <div>
            <button class="ui inverted green button" onClick={() => { trans() }}>구매 실행</button>
        </div>

    );
}

export default Trade;
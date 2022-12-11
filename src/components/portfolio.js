import React, {useState} from 'react';
import axios from 'axios';
import './portfolio.css'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';
import Trade from './trade';



function Portfolio(){ //주식 입력하면 비율 계산해서 추천해주는거
    function myList(){ 

        axios.get('http://13.125.140.171/kis/balance',{
            }).then((response) =>{
                console.log(response);
                setResdata(res.data.orderList.map((st, index) => ({
                    stockId: res.data.orderList[index].stockId,
                    rate: res.data.orderList[index].rate,
                    quantity: res.data.orderList[index].quantity,
                    price: res.data.orderList[index].price,
                    order: false
                })))
            })

            
      }

        
    return(
        <div className="Portfolio">
            <h2>주식 잔고조회</h2>
            <div className="budgetList">
                <table class="ui celled table" textalign="center">
                <thead><tr>
                    <th>주식 이름</th>
                    <th>보유 수량</th>
                    <th>수익률 (%)</th>
                    <th>옵션</th>
                </tr></thead>
                <tbody>
                    {/* {resData.map((stc,idx) =>
                        {return(
                            <tr>
                            <td key={idx}>{stc.stockId}</td>
                            <td>{stc.rate}</td>
                            <td>{stc.quantity}</td>
                            <td>{stc.price} ₩</td>
                            <td><button class="ui inverted violet button" onClick={() => { trade(stc.stockId, stc.quantity) }}> {stc.order ? '구매완료' : '구매'} </button></td>
                            </tr>
                        );
                        }
                    )} */}
                </tbody>
                </table>
                </div>
        </div>
    );
}

export default Portfolio;
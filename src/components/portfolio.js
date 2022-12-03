import React, {Component, useState} from 'react';
import axios from 'axios';
import './portfolio.css'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';

function Portfolio(){ //주식 입력하면 비율 계산해서 추천해주는거
    const nav = useNavigate();
    const [stockId,setID] = useState("");
    const [cost,setCost] = useState();
    const [stockList,stocknumFunc] = useState(0);
    const [stockTit, stockTitFunc] = useState([]);
    let stocks = [...stockTit];

    function addStock(){ //입력한 주식 리스트들
        stocks.push(stockId);
        stockTitFunc(stocks);

    }

    const idHandler = (e) => {
        e.preventDefault();
        setID(e.target.value);
        console.log(stocks);
    };

    const costHandler = (e) => {
        e.preventDefault();
        setCost(e.target.value);
    };


    const submitHandler = (e) => {
        e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        console.log(stocks);
    
        let requestbody = {
            cost:cost,
            stockList : stocks
        };
    
        console.log(JSON.stringify(requestbody));
        axios
          .post("http://13.125.140.171/rebalancing/auto/test", requestbody)
          .then((res) => {
            console.log(res)
            
            //nav("duration")
        });
      };
    
        
    // }
    return(
        <div className="Portfolio">
            <h2>주식 가격 및 비율 입력</h2>
            <div className="inputBox" >
                <div className="ui action input">
                    <input type="text" placeholder="값 입력" name='price'
                    onChange={costHandler} value={cost}></input><button className="ui button" type='submit'>입력</button>
                </div>
                <div className="ui action input">
                    <input type="text" placeholder="종목 코드 입력" name='stockId'
                    onChange={idHandler} value={stockId}></input><button class="ui button" onClick={()=>{addStock(); setID("")}}>담기</button>
                </div> 
            </div>
            <table className="ui celled striped table">
                <thead>
                <tr><th colSpan="3">금액 : {cost}</th></tr>
                <tr><th colSpan="3">담은 주식 목록</th></tr>
                </thead>
                <tbody>
                { stockTit.map( (stc, i)=>{
                    return (
                        <tr>
                            <td onClick={ ()=>{ stocknumFunc(i) } } key={i} >{ stc }</td>
                        </tr>
                        
                    )
                })}
                
                </tbody>
            </table>
            <button className="ui teal basic button" onClick={submitHandler}>입력</button>
        </div>
    );
}

export default Portfolio;
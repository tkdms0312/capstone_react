import React, {useState} from 'react';
import axios from 'axios';
import './rebalancing.css'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';
import Trade from './trade';



function Rebalancing(){ //주식 입력하면 비율 계산해서 추천해주는거
    const [loading, setLoading] = useState();
    const [stockID,setID] = useState("");
    const [cost,setCost] = useState();
    const [stockList,stocknumFunc] = useState(0);
    const [stockTit, stockTitFunc] = useState([]);
    const [modal,setModal] = useState();
    let stocks = [...stockTit];
    const [resData, setResdata] = useState([]);

    function addStock(){ //입력한 주식 리스트들
        stocks.push(stockID);
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
        setLoading(true);
        // state에 저장한 값을 가져옵니다.
        //console.log(stocks);
    
        let requestbody = {
            cost:cost,
            stockList : stocks
        };
    
        console.log(JSON.stringify(requestbody));

        axios
          .post("http://13.125.140.171/rebalancing/auto/test", requestbody)
          .then((res) => {
            setLoading(false);
            console.log(res);
            setResdata(res.data.orderList.map((st, index) => ({
                stockId: res.data.orderList[index].stockId,
                rate: res.data.orderList[index].rate,
                quantity: res.data.orderList[index].quantity,
                price: res.data.orderList[index].price,
                order: false
            })))
            console.log(resData);
            setModal(1);
            resData.map((st) => ( console.log(st.stockId))) //해결
            
        });
      };
    
      function trade(id,qua){ //구매 누르면 구매 완료
        setLoading(false);

        console.log(id);
        console.log(qua);

        axios.get('http://13.125.140.171/kis/order',{
                params:{
                    stockId: id,
                    quantity: qua
                }
            }).then((response) =>{
                console.log(response);
                const result = resData.map((stc=>{
                    return stc.stockId === id ? {...stc, order: !stc.order} : stc
                }))
                setResdata(result)
                
            })

            
      }
        
    return(
        <div className="Rebalancing">
            <h2>주식 가격 및 비율</h2>
            <div className="loading">
            {loading ?  
            // <div class="ui segment" >
              <div class="ui active inverted dimmer">
              <div class="ui text loader">계산중</div></div>
            : null}
                {modal == "1" ?  
                <div className="result">
                <table class="ui celled table" textalign="center">
                <thead><tr>
                    <th>주식 id</th>
                    <th>비율</th>
                    <th>수량</th>
                    <th>가격 (KRW)</th>
                    <th>옵션</th>
                </tr></thead>
                <tbody>
                    {resData.map((stc,idx) =>
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
                    )}
                </tbody>
                </table>
                </div>
                : <><div className="inputBox">
                    <div className="price">
                        <div className="ui action input">
                            <input type="text" placeholder="값 입력" name='price'
                                onChange={costHandler} value={cost}></input><button className="ui button"
                                disabled={cost !== null ? false : true}>입력</button>
                        </div>
                    </div>
                    <div className="id">
                        <div className="ui action input">
                            <input type="text" placeholder="종목 코드 입력" name='stockId'
                                onChange={idHandler} value={stockID}></input><button class="ui button" onClick={() => { addStock(); setID(""); }}
                                disabled={stockID.length !== 0 ? false : true}>담기</button>
                        </div>
                    </div>
                    </div>
                    <div className="setting">
                        <table className="ui celled striped table" padding="10px">
                            <thead>
                                <tr><th colSpan="3">금액: {cost}</th></tr>
                                <tr><th colSpan="3">담은 주식 목록</th></tr>
                            </thead>
                            <tbody>
                                {stockTit.map((stc, i) => {
                                    return (
                                        <tr>
                                            <td onClick={() => { stocknumFunc(i); } } key={i}>{stc}</td>
                                        </tr>

                                    );
                                })}

                            </tbody>
                        </table><button className="ui teal basic button" 
                        onClick={submitHandler}>입력</button></div></>}
            </div>
        </div>
    );
}

export default Rebalancing;
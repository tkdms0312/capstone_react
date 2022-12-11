import React, {useState} from 'react';
import axios from 'axios';
import './mybudget.css'
import 'semantic-ui-css/semantic.min.css'
import Modal from 'react-modal'
import Login from '../login';
import Trade from './trade';
import { useEffect } from 'react';



function Mybudget(){ //보유한 주식 보여주는
    const [stcList, setStcList] = useState([]);
    
    // useEffect(){

    // }
    axios.get('http://13.125.140.171/kis/balance',{
            }).then((res) =>{
                setStcList(res.data.output1.map((stc,index) => ({
                    name: res.data.output1[index].prdt_name,
                    quantity: res.data.output1[index].hldq_qty,
                    rate: res.data.output1[index].evlu_erng_rt,
                    order: false
                })))
                console.log(stcList);
            })
    
            function trade(id,qua){ //판매 누르면 판매 완료
                //setLoading(false);
        
                console.log(id);
                console.log(qua);
        
                axios.get('http://13.125.140.171/kis/sell',{
                        params:{
                            stockId: id,
                            quantity: qua
                        }
                    }).then((response) =>{
                        console.log(response);
                        const result = stcList.map((stc=>{
                            return stc.name === id ? {...stc, order: !stc.order} : stc
                        }))
                        setStcList(result)
                        
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
                    {stcList.map((stc,idx) =>
                        {return(
                            <tr>
                            <td key={idx}>{stc.name}</td>
                            <td>{stc.quantity}</td>
                            <td>{stc.rate} %</td>
                            <td><button class="ui inverted violet button" 
                            // onClick={() => { trade(stc.name, stc.quantity) }}
                            > {stc.order ? '판매완료' : '판매'} </button></td>
                            </tr>
                        );
                        }
                    )}
                </tbody>
                </table>
                </div>
        </div>
    );
}

export default Mybudget;
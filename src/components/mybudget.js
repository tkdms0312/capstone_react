import React, {useState, useRef} from 'react';
import axios from 'axios';
import './mybudget.css'
import 'semantic-ui-css/semantic.min.css'
import Modal from './modalDate';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import excelFile from '../stockList.xlsx'//get file location url from react src folder


function Mybudget(){ //보유한 주식 보여주는
    const [stcList, setStcList] = useState([]);
    const nav = useNavigate();
    const [nameTit, nameTitFunc] = useState([]);
    let names = [...nameTit];

    
    useEffect(()=>{
        axios.get('http://13.125.140.171/kis/balance',{
            }).then((res) =>{
                setStcList(res.data.output1.map((stc,index) => ({
                    name: res.data.output1[index].prdt_name,
                    quantity: res.data.output1[index].hldg_qty,
                    rate: res.data.output1[index].evlu_erng_rt,
                    order: false
                })))
                console.log(stcList);
            })

    }, []);
    
    
        function trade(name){ //판매 누르면 판매 완료
            const result = stcList.map((stc=>{
                return stc.name === name ? {...stc, order: !stc.order} : stc
            }))
            setStcList(result)
            return(
                <Modal /> //수량 입력 모달
            );
        }

    //     function match(id,idx){
    //         // get file from the imported url
    //     var request = new XMLHttpRequest();
    //     request.open('GET', excelFile, true);
    //     request.responseType = "arraybuffer";
    //     request.onload = function() {
    //         /* convert data to binary string */
    //         var data = new Uint8Array(request.response);
    //         var arr = new Array();
    //         for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    //         data = arr.join("");
    //         var funcid = id;

    //         //using xlsx library convert file to json
    //         const workbook = XLSX.read(data, { type: "binary" })
    //         const sheetName = workbook.SheetNames[0]
    //         const worksheet = workbook.Sheets[sheetName]
    //         const json = XLSX.utils.sheet_to_json(worksheet)
    //         const col = XLSX.utils.sheet_to_json(worksheet,{range: "A2:B943", header: ["stockId","name"]})
    //         //console.log(json)
            
    //         for(var i=0; i != 942; ++i){
    //             if(funcid === col[i].stockId){
    //                 names.push(col[i].name);
    //                 nameTitFunc(names);
    //                 break;
    //             }
    //             else continue;
    //         }
    //     };
        
    //     request.send();


    //     return(names[idx]);
    //   }


        
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
                            onClick={() => { trade(stc.name) }}
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
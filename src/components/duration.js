import React, { useState } from 'react';
import './duration.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';

function Duration() {
  const [date,setDate] = useState("");
  const [dura,setDura] = useState("");
  const DuraOpts = [
    "DAY", "WEEK_1", "WEEK_2", "MONTH_1", "MONTH_3", 
    "MONTH_6", "MONTH_9", "YEAR"
  ]

  const durationHandler = (e) => {
    e.preventDefault();
    setDura(e.target.value);
  };

  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
        
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(dura);

    let requestbody = {
        reblancingDate :date,
        period : dura
    };

    console.log(JSON.stringify(requestbody));

    axios
      .post("http://13.125.140.171/rebalancing/date", requestbody)
      .then((res) => {
        console.log(res); //리밸런싱 예정 날짜
        
    });
  };

    return (
      <div className="Time">
        <div className='duration'>
          <h2>주기 입력</h2>
          <select class="ui dropdown" onChange={durationHandler} value={dura}>
            <option value="">주기</option>
            <option value="DAY">DAY</option>
            <option value="WEEK_1">WEEK_1</option>
            <option value="WEEK_2">WEEK_2</option>
            <option value="MONTH_1">MONTH_1</option>
            <option value="MONTH_3">MONTH_3</option>
            <option value="MONTH_6">MONTH_6</option>
            <option value="MONTH_9">MONTH_9</option>
            <option value="YEAR">YEAR</option>
          </select>
        </div>
        <div className='date'>
          <h2>날짜 입력</h2>
            <div class="ui action input">
              <input type="text" placeholder="yyyy-MM-dd" name='date'
              onChange={dateHandler} value={date}></input><button class="ui inverted orange button" 
              onClick={submitHandler}>입력</button>
            </div>
        </div>
        
        
      
      </div>
    );
  }
  
export default Duration;
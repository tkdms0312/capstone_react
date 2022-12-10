import React, {useState} from 'react';
import axios from 'axios';
import './portfolio.css'
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';
import Trade from './trade';



function Portfolio(){ //주식 입력하면 비율 계산해서 추천해주는거

        
    return(
        <div className="Portfolio">
            <h2>주식 잔고조회</h2>
        </div>
    );
}

export default Portfolio;
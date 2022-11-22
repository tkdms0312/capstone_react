import React, {Component} from 'react';
import axios from 'axios';
import './rebalancing.css';
import { Button } from "semantic-ui-react";
import date from './duration'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, useNavigate } from "react-router-dom"

function Rebalancing(){ //주기 입력해서 리밸런싱 해주는거
    let nav = useNavigate();
    const duration = () => {
        nav("/duration");
    }


    return (
        <div className="Rebalancing">
            <Button className="durationButton" onClick={duration} size="massive">주기 입력</Button>
        
        </div>
       
    );
}

export default Rebalancing;
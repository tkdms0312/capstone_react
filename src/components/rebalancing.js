import React, {Component, useState} from 'react';
import axios from 'axios';
import './rebalancing.css';
import { Button, Segment, Form } from "semantic-ui-react";
import date from './duration'
import 'semantic-ui-css/semantic.min.css'
import { Navigate, useNavigate } from "react-router-dom"
import Modal from 'react-modal'
import Login from '../login';

function Rebalancing(){ //주기 입력해서 리밸런싱 해주는거
    return(
        <div>
            rebalancing
        </div>

    );
}

export default Rebalancing;
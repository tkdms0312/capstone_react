import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import './Nav.css';
// import {Button, Progress} from 'semantic-ui-react'
// import { Icon } from 'semantic-ui-react'
// import { Segment, Input } from 'semantic-ui-react'
import mainLogo from './img/pngwing.com.png'
import { Link } from 'react-router-dom';
import Login from './login';


function Navigation() {
  return (
    <div class="top_container">
        <header>
            <nav>
                <div className="logo">
                    <a href="/"><img src={mainLogo} width="80" height="80"/></a>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="portfolio">Portfolio</a></li>
                        <li><a href="rebalancing">Rebalancing</a></li>
                        <li><a href="mybudget">My budget</a></li>
                        <li><a href="mypage">My page</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <Login /> {/*로그인도 따로 뺌. 이게 나은거같음 post로 받고 또 해야해서 */}
        </div>
  );
}

export default Navigation;
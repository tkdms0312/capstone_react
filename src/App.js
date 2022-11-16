import 'semantic-ui-css/semantic.min.css'
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Segment, Input } from 'semantic-ui-react'

function App() {
  return (

    <div>
<h1>Hello World</h1>
<Icon loading name='spinner' />
<Icon loading name='certificate' /><Icon loading name='asterisk' />

<Segment inverted>
  <Input inverted placeholder='Search...' />
</Segment>

<Progress percent = {55} indicating />
<Button primary> 분석 해보기 </Button>



    </div>

  );
}

export default App;
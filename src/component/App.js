import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import BreakInterval from './breakinterval';

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     breakLength: 5,
     sessionLength:25

   }
 }
  render(){ return (
    <main >
      <h2>Pomodorow</h2>
      <BreakInterval/>
    </main>)
}
}

export default App;

import React, { Component } from 'react';

import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DoorCodeInterface from "./components/DoorCodeInterface/DoorCodeInterface";

class App extends Component {
  render() {
    return (
     <BrowserRouter>
         <Switch>
             <Route path="/" exact component={DoorCodeInterface}/>
         </Switch>
     </BrowserRouter>
    );
  }
}

export default App;

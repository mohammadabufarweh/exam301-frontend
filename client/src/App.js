import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './cmponents/Header'
import Home from './cmponents/Home'
import Fav from './cmponents/Fav'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Fav />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

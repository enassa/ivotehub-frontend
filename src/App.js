 // resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import "./css/nathan.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Verification from './pages/verification/verification'
import rootReducer from './reducers/allReducers'
import { createStore } from "redux"
import {Provider} from "react-redux"
import axios from 'axios'
const store = createStore(rootReducer)
// console.log("heyyy")

//  import Header from './Header'

 class App extends Component {
   render () {
     return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/student-details" component={Home} />
                  <Route exact path="/voting-page" component={Home} />
                  <Route exact path="/success-page" component={Home} />
                  <Route exact path="/results-page" component={Home} />
                  <Route exact path="/hh454j5hg34h5g4" component={Home} />
                  <Route path="/:page/:sub_page" component={Verification} />
                  <Route path="/:page" component={Verification} />
                  <Route exact path="/" component={Verification} />
                  <Route exact path="*" component={Home} />
              </Switch>
          </BrowserRouter>
       </Provider>
     )
   }
 }

export default App;

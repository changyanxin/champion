import React, { Component } from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Container/Home'
import Start from './Container/Start'
import Api from './Container/Api'
import About from './Container/About'
import Zhuce from './Container/Zhuce'
import Login from './Container/Login'
import Content from './Router/Content'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        <Route path="/home" component={Home}/>
                        <Route path="/start" component={Start}/>
                        <Route path="/api" component={Api}/>
                        <Route path="/about" component={About}/>
                        <Route path="/zhuce" component={Zhuce}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/content" component={Content}/>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </Router>
        )
    }
}

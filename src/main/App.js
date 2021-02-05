import React, {Component} from 'react'
import {BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'
import Menu from './Menu'

export default class App extends Component {
    render() {
        return (
            <Router> 
                <div>
                    <Menu/>
                    <Routes/>
                </div>
            </Router>
        )
    }
}

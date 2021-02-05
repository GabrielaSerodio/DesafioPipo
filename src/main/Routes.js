import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import NoMatch from '../pages/NoMatch'


export class Routes extends Component {
    render() {
        return (
            <main className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/profile' component={Profile}/>
                    <Route component={NoMatch}/>
                </Switch>
            </main>
        )
    }
}

export default Routes
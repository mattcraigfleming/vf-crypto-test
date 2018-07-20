import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from 'routes/home'
import Coin from 'routes/currencies'

export default () => (
    <Router>
        <React.Fragment>
            <Route path="/" component={Home} exact/>
            <Route path="/:id" component={Coin} />
        </React.Fragment>
    </Router>
)
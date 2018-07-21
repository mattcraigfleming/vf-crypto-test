import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from 'routes/home'
import Currency from 'routes/currency'

export default () => (
    <Router>
        <React.Fragment>
            <Route path="/" component={Home} exact/>
            <Route path="/coin/:id/" component={Currency} />
        </React.Fragment>
    </Router>
)
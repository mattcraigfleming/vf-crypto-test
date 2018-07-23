import React from 'react'
import { Route } from "react-router-dom";
import Home from 'routes/home'
import Currency from 'routes/currency'

export default () => (
        <React.Fragment>
            <Route path="/" component={Home} exact/>
            <Route path="/coin/:id/" component={Currency} />
        </React.Fragment>
)
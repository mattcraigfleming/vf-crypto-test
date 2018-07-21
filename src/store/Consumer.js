import React from 'react'
import { CContext } from './Provider';

export const plusCoins = (WrappedComponent) => (props) => (
    <CContext.Consumer>
        {state => <WrappedComponent blah={state} {...state} {...props} />}
    </CContext.Consumer>
)
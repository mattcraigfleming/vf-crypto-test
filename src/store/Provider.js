import React, { Component } from 'react'

const DEFAULT_STATE = {
    coins: [],
};  

export const CContext = React.createContext(DEFAULT_STATE);

class Provider extends Component {
    state = DEFAULT_STATE;

    getCoins = async () => {
        const response = await fetch('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10&structure=array');
        const coins = await response.json();
        this.setState({
            coins: coins.data,
            lastUpdated: Date()
        })
        console.log(this.state.lastUpdate)
        console.log(this.state.coins)
    } 

    render() { 
        console.log(this.getCoins);
        return ( 
            <CContext.Provider value={{ ...this.state, getCoins: this.getCoins, }}>
            
                {this.props.children}
            </CContext.Provider>

         );
    }
}
 
export default Provider;

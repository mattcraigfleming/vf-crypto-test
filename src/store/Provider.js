import React, { Component } from 'react'

const DEFAULT_STATE = {
    coins: [],
    isLoading: false,
};  

export const CContext = React.createContext(DEFAULT_STATE);

class Provider extends Component {
    state = DEFAULT_STATE;

    componentDidMount() {
        this.setState({isLoading: true})
    }

    updateCoins = async () => {
        const response = await fetch(`https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10&structure=array`);
        const coins = await response.json();
        const error = coins.metadata;
        this.setState({
            coins: coins.data,
            lastUpdated: Date(),
            isLoading: false,
            error: error,
        })
        console.log(this.state.lastUpdate)
        console.log(this.state.error)
    }
    
    updateCoin = async (id) => {
        const response = await fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/`);
        const res = await response.json();
        const coin = res.data;
        const nextCoin = {
            ...this.state.coins,
            [coin.id]: coin,
        }
        this.setState((prevState) => ({
            coins: nextCoin,
            isLoading: false
        }));
    }

    render() { 
        return ( 
            <CContext.Provider value={{ ...this.state, updateCoins: this.updateCoins, updateCoin: this.updateCoin, }} > 
              {    /* Swap for spinner component */
                this.state.isLoading ? 
                <img style={{width: 120, height: 100, display: 'flex'}} alt="Loading..." src={ require('../images/loading.gif') } /> : this.props.children
              }
            </CContext.Provider>

         );
    }
}
 
export default Provider;

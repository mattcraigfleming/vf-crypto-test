import React, { Component } from 'react'

const DEFAULT_STATE = {
    coins: [],
    isLoading: false
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
        this.setState({
            coins: coins.data,
            lastUpdated: Date(),
            isLoading: false
        })
        console.log(this.state.lastUpdate)
        console.log(this.state.coins)
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
            coins: nextCoin
        }));
    }

    render() { 
        console.log(this.getCoins);
        return ( 
            <CContext.Provider value={{ ...this.state, updateCoins: this.updateCoins, updateCoin: this.updateCoin, }}>
                           { 	/* Swap for spinner component */
                            this.state.isLoading ? 
                            <div>Loading .....</div> :
            
                        
                            this.props.children
                        
                       }
                       </CContext.Provider>

         );
    }
}
 
export default Provider;

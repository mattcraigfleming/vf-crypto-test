import React from 'react'
import AppList from 'components/AppList'
import { CoinCell, PriceCell, MarketCapCell, PercentCell} from 'routes/home/partial/tableCells'
import styled from 'styled-components'

const tableCols = [
    {
    		title: 'cryptocurrency',
    		component: CoinCell,
    		path: ['name'],
    	},
    	{
    		title: 'price',
		    component: PriceCell,
    		path: ['price_usd'],
    	},
    	{
    		title: 'market cap',
    		component: MarketCapCell,
    		path: ['market_cap_usd'],
    	},
    	{
    		title: '24h change',
    		component: PercentCell,
    		path: ['percent_change_24h'],
    	},];



const WrapperTable = styled(AppList)`
    width: 100%;
`

class Home extends React.Component {
    state = {
		coins: [],
		isLoading: false
    }
    async componentDidMount() {
		this.setState({ isLoading: true });
        const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
        const coins = await response.json();
        this.setState(() => ({
			coins,
			isLoading: false
        })) 
    }

    render() {
		return (
			<div>
			{ 
				this.state.isLoading ? 
					<div>Loading....</div>
					:
				<WrapperTable columns={tableCols} data={this.state.coins} />
			}
			</div>
		)
    }
}


export default Home;
import React from 'react'
import { withRouter } from 'react-router-dom'
import AppList from 'components/AppList'
import { CoinCell, PriceCell, MarketCapCell, PercentCell} from 'routes/home/partial/tableCells'
import styled from 'styled-components'
import { plusCoins } from 'store/Consumer'


const tableCols = [
		{
			path: [],
		},
		{
			path: [],
		},
    	{
    		title: 'cryptocurrency',
    		component: CoinCell,
    		path: ['name'],
    	},
    	{
    		title: 'price',
		    component: PriceCell,
    		path: ['price'],
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
		},
		{
			path: [],
		},
		{
			path: [],
		}
];



const WrapperTable = styled(AppList)`
    width: 100%;
`

class Home extends React.Component {
    state = {
		isLoading: false,
	}
	
    componentDidMount() {
		this.props.getCoins();
	}

	handleRowClick = (row) => {
		console.log(row);
		const {history} = this.props;
		history.push(`/${row.name}`)
	}


    render() {
		return (
			<div>
			{ 	/* Swap for spinner component */
				this.state.isLoading ? 
					<div>Loading....</div>
					:
				<WrapperTable columns={tableCols} data={this.props.coins} onRowClick={this.handleRowClick}/>
			}

			</div>
		)
    }
}


export default withRouter(
	plusCoins(Home)
);
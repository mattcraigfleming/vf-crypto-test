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

	
    componentDidMount() {
		const {updateCoins} = this.props;
		updateCoins();
		this.interval = window.setInterval(updateCoins, 60000)
	}

	handleRowClick = (row) => {
		console.log(row);
		const { history } = this.props;
		history.push(`/coin/${row.id}`)
	}


    render() {
		return  <WrapperTable columns={tableCols} data={Object.values(this.props.coins).sort((a, b) => a.rank < b.rank ? -1 : 1)} onRowClick={this.handleRowClick} />
		
    }
}


export default withRouter(
	plusCoins(Home)
);
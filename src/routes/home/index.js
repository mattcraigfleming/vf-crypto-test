import React from 'react'
import { withRouter } from 'react-router-dom'
import AppList from 'components/AppList'
import { CoinCell, PriceCell, MarketCapCell, PercentCell} from 'routes/home/partial/tableCells'
import styled from 'styled-components'
import { plusCoins } from 'store/Consumer'


const tableCols = [
		{
			
		},
		{
			
		},
		{
			
		},
    	{
    		title: 'cryptocurrency',
    		component: CoinCell,
    		
    	},
    	{
    		title: 'price',
		    component: PriceCell,
    		
    	},
    	{
    		title: 'market cap',
    		component: MarketCapCell,
    		
    	},
    	{
    		title: '24h change',
    		component: PercentCell,
    		
		},
		{
			
		},
		{
			
		},
		{
			
		},
];



const WrapperTable = styled(AppList)`
    width: 100%;
`

class Home extends React.Component {

	
    componentDidMount() {
		this.props.updateCoins();
		this.interval = window.setInterval(this.props.updateCoins(), 60000)
	}

	componentWillUnmount() {
				window.clearInterval(this.interval)
			 }

	handleRowClick = (row) => {
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
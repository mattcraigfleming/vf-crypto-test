import React from 'react';
import styled from 'styled-components'

const CoinCellChild = styled.div`
	display: flex;
	align-items: center;
	color: rgb(96, 108, 131);
`

const Rank = styled.span`
	color: grey;
	margin-right: 24px;
	font-size: 12px;
	font-weight: bold;
`

const Icon = styled.img`
	margin-right: 12px;
	width: 25px;
`

const Title = styled.span`
	color: grey;
	font-size: 14px;
`

const PriceCellChild = styled.div`
	color: rgb(96,108,131);
	font-size: 16px;
	display: flex;
	align-items: center;
`
const MarketCapCellChild = styled.div`
	color: rgb(96,108,131);
	font-size: 12px;
	display: flex;
	align-items: center;
`

const PercentCellInner = styled.div`
	color: rgb(96,108,131); 
	font-size: 12px;
	font-weight: bold;
	color: ${props => parseInt(props.value, 10) > 0 ? '#2ac07c' : '#a94442'}
`

const CurrencySymbol = styled.span`
	color: #cccccc;
	margin-right: 5px;
`



export const CoinCell = ({ data }) => (
	<CoinCellChild>

		<Rank>
			{data.rank}
		</Rank>
		 <Icon src={`https://rawgit.com/atomiclabs/cryptocurrency-icons/master/svg/icon/${data.symbol.toLowerCase()}.svg`} alt={data.symbol.toLowerCase()} />
		<Title>
			{data.name}
		</Title>
		

	</CoinCellChild>
)

/* replace number formatting */

export const PriceCell = ({ data }) => (
	<PriceCellChild>
		<CurrencySymbol>£</CurrencySymbol> {data.quotes['USD'].price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
	</PriceCellChild>
);

export const MarketCapCell = ({ data }) => (
	<MarketCapCellChild>
		<CurrencySymbol>£</CurrencySymbol> {data.quotes['USD'].market_cap.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
	</MarketCapCellChild>
);

export const PercentCell = ({ data }) => (
	<PercentCellInner>
		{Math.abs(data.quotes['USD'].percent_change_24h)} % { parseInt(data.quotes['USD'].percent_change_24h, 10) > 0 ? '↑' : '↓'}
	</PercentCellInner>
);
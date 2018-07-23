import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { plusCoins } from 'store/Consumer'
import Icon from 'components/Icon'

const BackButton = styled(Link)`
    background-color: rgb(231,242,252);
    color: rgb(105,168,239);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;

`

const HeaderNav = styled.div`
    display: flex;
	align-items: center;
	color: rgb(96,108,131);

	img {
		width: initial;
	}
`

const Name = styled.div`

`

const Symbol = styled.div`

`

const Title = styled.div`

`

const Price = styled.div`

`

const CurrencyHeader = ({ coins, match }) => {

    const coin = coins[match.params.id];

    if (!coin) return null

    return (
        <HeaderNav>
            <BackButton to="/">
                  ←
            </BackButton>
            <Icon symbol={coin.symbol}/>
            <Title>
                <Name>
                    {coin.name}
                </Name>
                <Symbol>
                    {coin.quotes.USD.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                </Symbol>
            </Title>
            <Price>
            
            </Price>
        </HeaderNav>
    )
}

export default plusCoins(CurrencyHeader)
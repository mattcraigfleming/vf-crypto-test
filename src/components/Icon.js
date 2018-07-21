import React from 'react'
import styled from 'styled-components'

const CurrencyIcon = styled.img`
    width: 25px;
    margin-right: 12px;
`

export const Icon  = ({ symbol, className }) => {
    return (
        <CurrencyIcon className={className} src={`https://rawgit.com/atomiclabs/cryptocurrency-icons/master/svg/icon/${symbol.toLowerCase()}.svg`} />
    )
}

export default Icon
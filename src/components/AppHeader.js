import React from 'react'
import styled from 'styled-components'
import Dropdown from 'components/Dropdown/Dropdown';
import DropdownItem from 'components/Dropdown/DropdownItem'

const Header = styled.div`
    height: 10%;
`

const Logo = styled.span`
    padding: 2em;
    font-size: 32px;
`

export default () => (
    <Header>
        <Logo>VFCrypto</Logo>
        <Dropdown label="USD">
            <DropdownItem label="USD" value="USD" />
            <DropdownItem label="GBP" value="GBP" />
            <DropdownItem label="EUR" value="EUR" />
            <DropdownItem label="JPY" value="JPY" />
            <DropdownItem label="KRW" value="KRW" />
        </Dropdown>
    </Header>
)
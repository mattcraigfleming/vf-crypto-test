import React from 'react'
import styled from 'styled-components'


const Header = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 10%
    margin-right: 20%;
`

const Logo = styled.span`
    padding: 1em;
    font-size: 32px;
`

export default () => (
    <Header>
        <Logo>VFCrypto</Logo>
        
    </Header>
)
import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    height: 10%;
`

const Logo = styled.span`
    padding: 2em;
    font-size: 40px;
`

export default () => (
    <Header>
        <Logo>VFCrypto</Logo>
    </Header>
)
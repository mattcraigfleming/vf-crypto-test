import React from 'react'
import styled from 'styled-components'

const ListHeader = styled.thead`
background-color: rgb(235,240,244);
border: 1px solid rgb(207,219,228);
color: rgb(171,175,198);
`

const Th = styled.th`
    text-transform: uppercase;
    text-aign: ${props => props.align};
    padding: 10px 24px;
    font-size: 12px;
`

const ListNav = ({ columns = [] }) => (
    <ListHeader>
        <tr>
        {columns.map(column => <Th key={column.title} align={column.align}>{column.title}</Th>)}
        </tr>
    </ListHeader>
)

export default ListNav
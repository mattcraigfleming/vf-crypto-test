import React from 'react'
import styled from 'styled-components'

const TableData = styled.td`
    padding: 24px;
    text-align: ${props => props.align};
`

const ListItem = ({ component, value, align, data }) => {
    if (component === undefined) return <TableData />
    return(
        <TableData align={align}>
            {React.createElement(component, { value, data })}
        </TableData>
    )
}


ListItem.defaultProps = {
    align: 'left',
}

export default ListItem;
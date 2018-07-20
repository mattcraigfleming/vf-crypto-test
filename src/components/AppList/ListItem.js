import React from 'react'
import styled from 'styled-components'

const TableData = styled.td`
    padding: 24px;
    text-align: ${props => props.align};
`

const ListItem = ({ component, value, align }) => {
    return(
        <TableData>
            {React.createElement(component, { value })}
        </TableData>
    )
}


ListItem.defaultProps = {
    align: 'left',
}

export default ListItem;
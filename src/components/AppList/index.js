import React from 'react'
import ListNav from 'components/AppList/ListNav'
import ListItem from 'components/AppList/ListItem'
import styled from 'styled-components'

const Tr = styled.tr`
	&:hover {
		color: #949aad;
		background-color: #ebf1f5;
	}
`

const AppList = ({ columns, data, className, onRowClick }) => (
    <table className={className}>
        <ListNav columns={columns} />
                <tbody>
        			{data.map(row => (
        				<Tr onClick={() => onRowClick(row)}>
        					{
        						columns.map(column => (
        							<ListItem component={column.component} align={column.align} data={row} />
        						))
        					}
        				</Tr>
        			))}
        		</tbody>
    </table>
)

export default AppList;
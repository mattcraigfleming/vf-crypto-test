import React from 'react'
import ListNav from 'components/AppList/ListNav'
import ListItem from 'components/AppList/ListItem'

const reducer = (acc, currentValue) => acc && acc[currentValue];
const post = (o, path, defaultVal) => path.reduce(reducer, o) || defaultVal;

const AppList = ({ columns, data, className, onRowClick }) => (
    <table className={className}>
        <ListNav columns={columns} />
                <tbody>
        			{data.map(row => (
        				<tr onClick={() => onRowClick(row)}>
        					{
        						columns.map(column => (
        							<ListItem key={data.id} component={column.component} align={column.align} value={post(row, column.path)} data={row}/>
        						))
        					}
        				</tr>
        			))}
        		</tbody>
    </table>
)

export default AppList;
import React from 'react'
import ListNav from 'components/AppList/ListNav'
import ListItem from 'components/AppList/ListItem'

const reducer = (item, currentValue) => item && item[currentValue];
const post = (o, path, defaultVal) => path.reduce(reducer, o) || defaultVal;

const AppList = ({ columns, data, className }) => (
    <table className={className}>
        <ListNav columns={columns}/>
                <tbody>
        			{data.map(row => (
        				<tr>
        					{
        						columns.map(column => (
        							<ListItem component={column.component} align={column.align} value={post(row, column.path)} />
        						))
        					}
        				</tr>
        			))}
        		</tbody>
    </table>
)

export default AppList;
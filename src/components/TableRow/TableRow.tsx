/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';

const TableRows = (props: any) => {
	const { columnKeys, rowData } = props;

	return rowData?.map((item: any) => {
		return (
			<tr className={'table-element-row'} key={item.id}>
				{columnKeys.map((key: string) => {
					const elementKey = `${item.id}-${item[key]}`;
					const classNames = `table-element-cell ${key}`;
					const value = item[key].toString();
					if (key === 'name') {
						return (
							<td key={elementKey} className={classNames}>
								<Link to={{ pathname: '/details', state: { item } }}>{value}</Link>
							</td>
						);
					}
					return (
						<td key={elementKey} className={classNames}>
							{value}
						</td>
					);
				})}
			</tr>
		);
	});
};

export default TableRows;

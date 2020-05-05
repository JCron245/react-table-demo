/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantData } from '../../api/interface';
import { TableRowsProps } from './tableRowInterface';

const TableRows = (props: TableRowsProps) => {
	const { columnKeys, rowData } = props;

	const rows = () => {
		return rowData?.map((item: RestaurantData) => {
			return (
				<tr className={'table-element-row'} key={item.id}>
					{columnKeys.map((key: string) => {
						const elementKey = `${item.id}-${(item as any)[key]}`;
						const classNames = `table-element-cell ${key}`;
						const value = (item as any)[key].toString();
						if (key === 'name') {
							return (
								<td key={elementKey} className={classNames}>
									<Link className={'table-element-cell-link'} to={{ pathname: '/details', state: { item } }}>
										{value}
									</Link>
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

	return <>{rows()}</>;
};

export default TableRows;

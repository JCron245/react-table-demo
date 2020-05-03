import React from "react";
import { RestaurantData } from "../../api/interface";
import "./table.scss";

export interface TableElementProps {
	/**
	 * Which properties from the data we want to show in the table ui (which columns to show)
	 */
	columnKeys: string[];
	/**
	 * The data to be represented
	 */
	data: RestaurantData[];
	/**
	 * on sort call
	 */
	onSort: any;
	/**
	 * on filter call
	 */
	onFilter: any;
	/**
	 * Limit of items to show per page
	 */
	paginationLimit?: number;
}

const TableElement = (props: TableElementProps) => {
	const { columnKeys, data, paginationLimit: limit, onSort } = props;

	const createHeaderCells = (): JSX.Element[] => {
		return columnKeys.map((key: string) => {
			return (
				<th className={"table-element-cell-header"} key={`header-${key}`}>
					<button
						className={"table-element-cell-button"}
						onClick={() => onSort(key)}
					>
						{key}
					</button>
				</th>
			);
		});
	};

	const createHeader = () => {
		return <tr className={"table-element-head-row"}>{createHeaderCells()}</tr>;
	};

	const createRows = () => {
		let rowData = data;
		if (limit) {
			rowData = rowData.slice(0, limit + 1);
		}
		return rowData?.map((item: any) => {
			return (
				<tr className={"table-element-row"} key={item.id}>
					{columnKeys.map((key: string) => {
						return (
							<td
								key={`cell-${item.id}-${item[key]}`}
								className={"table-element-cell"}
							>
								{item[key]}
							</td>
						);
					})}
				</tr>
			);
		});
	};

	return (
		<section className={"table-element-container"}>
			<table className={"table-element"}>
				<thead className={"table-element-head"}>{createHeader()}</thead>
				<tbody className={"table-element-body"}>{createRows()}</tbody>
			</table>
		</section>
	);
};

export default TableElement;

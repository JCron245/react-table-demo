/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, memo } from 'react';
import './table.scss';
import TablePagination from '../TablePagination/TablePagination';
import TableRows from '../TableRow/TableRow';
import { TableElementProps } from './tableInterface';
import { RestaurantData } from '../../api/interface';
import { Frown } from 'react-feather';

export const getRowSlice = (currentPage: number, limit: number, data: RestaurantData[]) => {
	const start = currentPage * limit;
	const end = currentPage === 0 ? limit : limit * (currentPage + 1);
	return JSON.parse(JSON.stringify(data)).slice(start, end);
};

const TableElement = (props: TableElementProps) => {
	const { columnKeys, data, paginationLimit, onSort } = props;
	const [pages, setPages] = useState<number>();
	const [currentPage, setCurrentPage] = useState<number>();
	const [rowData, setRowData] = useState<RestaurantData[]>();

	useEffect(() => {
		setCurrentPage(0);
		setPages(Math.ceil(data.length / paginationLimit));
	}, []);

	useEffect(() => {
		setPages(Math.ceil(data.length / paginationLimit));
		setCurrentPage(0);
		setRowData(getRowSlice(0, paginationLimit, data));
	}, [data]);

	useEffect(() => {
		if (currentPage !== undefined) {
			setRowData(getRowSlice(currentPage, paginationLimit, data));
		}
	}, [currentPage]);

	const createHeaderCells = (): JSX.Element[] => {
		return columnKeys.map((key: string) => {
			return (
				<th className={'table-element-cell-header'} key={`header-${key}`}>
					<button title={`Sort by ${key}`} className={'table-element-cell-button'} onClick={() => onSort(key)}>
						{key}
					</button>
				</th>
			);
		});
	};

	const createHeader = useCallback(() => {
		return <tr className={'table-element-head-row'}>{createHeaderCells()}</tr>;
	}, [data]);

	const next = () => {
		if (currentPage === undefined || !pages) return;
		const nextPage = currentPage + 1 < pages ? currentPage + 1 : currentPage;
		setCurrentPage(nextPage);
	};

	const previous = () => {
		if (currentPage === undefined || !pages) return;
		const nextPage = currentPage - 1 < 0 ? currentPage : currentPage - 1;
		setCurrentPage(nextPage);
	};

	if (!rowData) return null;

	return (
		<section className={'table-element-container'}>
			{data.length > 0 ? (
				<>
					<table className={'table-element'}>
						<thead className={'table-element-head'}>{createHeader()}</thead>
						<tbody className={'table-element-body'}>
							<TableRows columnKeys={columnKeys} rowData={rowData} />
						</tbody>
					</table>
					<TablePagination
						onPageSet={setCurrentPage}
						currentPage={currentPage || 0}
						onPrevious={previous}
						onNext={next}
						pages={pages || 0}
						paginationLimit={paginationLimit}
					/>
				</>
			) : (
				<div className={'table-element-no-data'}>
					Sorry there is no data available that matches this criteria <Frown />
				</div>
			)}
		</section>
	);
};

export default memo(TableElement);

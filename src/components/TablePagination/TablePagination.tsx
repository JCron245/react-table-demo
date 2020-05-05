/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './tablePagination.scss';
import { TablePaginationProps } from './tablePaginationInterface';
import { ArrowLeft, ArrowRight } from 'react-feather';

const TablePagination = (props: TablePaginationProps) => {
	const { onNext, onPageSet, onPrevious, pages } = props;

	const pageBoxes = () => {
		const boxes = [];
		for (let i = 0; i < pages; i++) {
			boxes.push(
				<button onClick={() => onPageSet(i)} className={'page-btn page-box-btn'}>
					{i + 1}
				</button>
			);
		}
		return boxes;
	};

	return (
		<div className={'pagination-container'}>
			<button onClick={onPrevious} className={'page-btn page-control-btn'} aria-label={'previous page'}>
				<ArrowLeft size={20} /> Previous
			</button>
			{pageBoxes()}
			<button onClick={onNext} className={'page-btn page-control-btn'} aria-label={'next page'}>
				Next <ArrowRight size={20} />
			</button>
		</div>
	);
};

export default TablePagination;

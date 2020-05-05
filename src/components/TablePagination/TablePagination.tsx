/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './tablePagination.scss';

export interface FilterBarProps {
	currentPage: number;
	onNext: any;
	onPrevious: any;
	onPageSet?: any;
	pages: number;
	paginationLimit: number;
}
const TablePagination = (props: FilterBarProps) => {
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
		<div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem' }}>
			<button onClick={onPrevious} className={'page-btn page-control-btn'}>
				Previous
			</button>
			{pageBoxes()}
			<button onClick={onNext} className={'page-btn page-control-btn'}>
				Next
			</button>
		</div>
	);
};

export default TablePagination;

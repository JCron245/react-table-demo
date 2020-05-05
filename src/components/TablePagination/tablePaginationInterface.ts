export interface TablePaginationProps {
	currentPage: number;
	onNext: any;
	onPrevious: any;
	onPageSet: any;
	pages: number;
	paginationLimit: number;
}

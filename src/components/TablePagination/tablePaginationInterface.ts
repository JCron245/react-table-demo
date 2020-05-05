export interface TablePaginationProps {
	currentPage: number;
	onNext: () => void;
	onPrevious: () => void;
	onPageSet: (page: number) => void;
	pages: number;
	paginationLimit: number;
}

import { RestaurantData } from '../../api/interface';

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
	 * Limit of items to show per page
	 */
	paginationLimit: number;
}

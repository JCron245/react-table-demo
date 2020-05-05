import { RestaurantData } from '../../api/interface';

export interface FilterBarProps {
	data: RestaurantData[];
	onFilter?: (event: FilterEvent) => void;
	onSearch?: (event: string) => void;
}

export interface FilterValue {
	label: string;
	values: string[];
}

export interface FilterEvent {
	label: string;
	value: string;
}

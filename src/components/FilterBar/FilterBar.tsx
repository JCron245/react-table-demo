/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import './filterBar.scss';

export interface FilterBarProps {
	data: any;
	onFilter?: any;
	onSearch?: any;
}

/**
 * Filter bar for Restaurant Table
 *
 * This holds the state, genre, and attire filters
 * @param props
 */
const FilterBar = (props: FilterBarProps) => {
	const { data, onFilter, onSearch } = props;
	const [filterValues, setFilterValues] = useState<any>();
	const [attireFilter, setAttireFilter] = useState<Option>();
	const [genreFilter, setGenreFilter] = useState<Option>();
	const [searchFilter, setSearchFilter] = useState<string>();
	const [stateFilter, setStateFilter] = useState<Option>();

	/**
	 * I want to gather up all the unique values in our state, attire, and genre
	 * properties to give the user filtering options. state and attire are
	 * both strings while genre is a string array
	 */
	useEffect(() => {
		setSearchFilter('');
		const filterLabels = ['state', 'genre', 'attire'];
		const filtersObj = filterLabels.map((filter: string) => {
			let options;
			if (filter === 'genre') {
				options = Array.from(
					new Set(
						data
							.map((item: any) => (item as any)[filter])
							.reduce((a: any, b: any) => a.concat(b), [])
							.sort((a: any, b: any) => (a > b ? 1 : -1))
					)
				);
			} else {
				options = Array.from(new Set(data.map((item: any) => item[filter].toLowerCase()).sort((a: any, b: any) => (a > b ? 1 : -1))));
			}
			return { label: filter, values: options };
		});
		if (filtersObj) {
			setFilterValues(filtersObj);
		}
	}, []);

	useEffect(() => {
		if (stateFilter) {
			onFilter({ label: 'state', value: stateFilter.value });
		}
	}, [stateFilter]);

	useEffect(() => {
		if (attireFilter) {
			onFilter({ label: 'attire', value: attireFilter.value });
		}
	}, [attireFilter]);

	useEffect(() => {
		if (genreFilter) {
			onFilter({ label: 'genre', value: genreFilter.value });
		}
	}, [genreFilter]);

	const keyPress = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			onSearch(searchFilter);
		}
	};

	const enterPress = () => onSearch(searchFilter);

	return (
		<form className={'filters'}>
			<Dropdown
				controlClassName={'filter-main'}
				key={'state'}
				options={filterValues?.find((f: any) => f.label === 'state').values}
				placeholder={`Filter By State`}
				placeholderClassName={`filter-placeholder`}
				menuClassName={'filter-menu'}
				className={'filter'}
				onChange={setStateFilter}
				value={stateFilter}
			/>
			<Dropdown
				controlClassName={'filter-main'}
				key={'genre'}
				options={filterValues?.find((f: any) => f.label === 'genre').values}
				placeholder={`Filter By Genre`}
				placeholderClassName={`filter-placeholder`}
				menuClassName={'filter-menu'}
				className={'filter'}
				onChange={setGenreFilter}
				value={genreFilter}
			/>
			<Dropdown
				controlClassName={'filter-main'}
				key={'attire'}
				options={filterValues?.find((f: any) => f.label === 'attire').values}
				placeholder={`Filter By Attire`}
				placeholderClassName={`filter-placeholder`}
				menuClassName={'filter-menu'}
				className={'filter'}
				onChange={setAttireFilter}
				value={attireFilter}
			/>
			<div className={'search-container'}>
				<label className={'search-label'} aria-label={'Search restaurants'}>
					<input
						className={'search-input'}
						type="text"
						defaultValue={searchFilter}
						onChange={(e: any) => setSearchFilter(e.target.value)}
						onKeyPress={keyPress}
						placeholder={'Search Restaurants'}
					/>
				</label>
				<button type="button" onClick={enterPress} className={'search-btn'}>
					Search
				</button>
			</div>
		</form>
	);
};

export default FilterBar;

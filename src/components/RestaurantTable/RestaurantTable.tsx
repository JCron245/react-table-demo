/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import './restaurantTable.scss';
import { getRestaurantData } from '../../api/restaurant';
import { RestaurantData } from '../../api/interface';
import TableElement from '../Table/Table';
import 'react-dropdown/style.css';
import FilterBar from '../FilterBar/FilterBar';

const RestaurantTable = () => {
	const [data, setData] = useState<RestaurantData[]>();
	const [filteredData, setFilteredData] = useState<RestaurantData[]>();
	const [stateFilter, setStateFilter] = useState<string>();
	const [searchFilter, setSearchFilter] = useState<string>();
	const [genreFilter, setGenreFilter] = useState<string>();
	const [attireFilter, setAttireFilter] = useState<string>();
	const [sortAscending, setSortAscending] = useState<boolean>(true);
	const [sortName, setSortName] = useState<string>();
	/**
	 * These are the columns to show
	 */
	const [columnKeys, setColumnKeys] = useState<string[]>();

	/**
	 * On component mount we will get the data
	 */
	useEffect(() => {
		setColumnKeys(['name', 'city', 'state', 'telephone', 'genre']);
		getRestaurantData().then((res: RestaurantData[]) => {
			setData(res);
			setFilteredData(res);
			setSortAscending(true);
			setSortName('name');
		});
	}, []);

	/**
	 * Sort and filter when we see one of the options change,
	 * some of this gets a little silly. There is a cleaner way to do this
	 * but really I would like to clean up how some of the data comes back
	 * from the API
	 */
	useEffect(() => {
		let filtered = data;
		if (searchFilter) {
			filtered = filtered?.filter((item) => {
				return (
					item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
					item.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
					item.genre.toString().toLowerCase().includes(searchFilter.toLowerCase())
				);
			});
		}
		if (stateFilter) {
			filtered = filtered?.filter((item) => {
				return item.state.toLowerCase() === stateFilter.toLowerCase();
			});
		}
		if (genreFilter) {
			filtered = filtered?.filter((item) => {
				return item.genre.includes(genreFilter);
			});
		}
		if (attireFilter) {
			filtered = filtered?.filter((item) => {
				return item.attire.toLowerCase() === attireFilter.toLowerCase();
			});
		}
		setFilteredData(filtered);
	}, [attireFilter, genreFilter, searchFilter, stateFilter]);

	const onSort = (sort: string) => {
		if (sort) {
			// If we sort by the same property again flip the sort around,
			// otherwise reset to ascending order
			setSortName(sort);
			setSortAscending(sort === sortName ? !sortAscending : true);
		}
	};

	/**
	 * Sort the data whenever we see sortName or sortAscending change
	 */
	useEffect(() => {
		if (sortName) {
			const sorted = data?.slice(0).sort((a: any, b: any) => {
				if (sortAscending) {
					return a[sortName] > b[sortName] ? 1 : -1;
				} else {
					return a[sortName] < b[sortName] ? 1 : -1;
				}
			});
			setFilteredData(sorted);
		}
	}, [sortName, sortAscending, sortAscending]);

	const onFilter = (filter: any) => {
		const { label, value } = filter;
		switch (label) {
			case 'state':
				setStateFilter(value);
				break;
			case 'genre':
				setGenreFilter(value);
				break;
			case 'attire':
				setAttireFilter(value);
				break;
			default:
				return;
		}
	};

	const filterBar = useCallback(() => {
		if (!data) return null;
		return <FilterBar data={data} onFilter={(v: any) => onFilter(v)} onSearch={setSearchFilter} />;
	}, [data, sortName]);

	if (!filteredData) return null;

	return (
		<div className={'restaurant-table'}>
			<h1 className={'title'}>Restaurant Table</h1>
			<div className={'content'}>
				{filterBar()}
				<TableElement onSort={onSort} data={filteredData} columnKeys={columnKeys} paginationLimit={10} />
			</div>
		</div>
	);
};

export default RestaurantTable;

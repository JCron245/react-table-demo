import React, { useEffect, useState } from "react";
import "./restaurantTable.scss";
import { getRestaurantData } from "../../api/restaurant";
import { RestaurantData } from "../../api/interface";
import TableElement from "../Table/Table";

const RestaurantTable = () => {
	const [data, setData] = useState<RestaurantData[]>();
	const [filteredData, setFilteredData] = useState<RestaurantData[]>();
	const [filterString, setFilterString] = useState<string>();
	const [sortAscending, setSortAscending] = useState<boolean>(true);
	const [sortName, setSortName] = useState<string>();
	const [columnKeys] = useState([
		"name",
		"city",
		"state",
		"telephone",
		"genre",
	]);

	/**
	 * On component mount we will get the data
	 */
	useEffect(() => {
		getRestaurantData().then((res: RestaurantData[]) => {
			setData(res);
			setSortAscending(true);
			setSortName("name");
		});
	}, []);

	const onSort = (sort: string) => {
		if (sort) {
			// If we sort by the same property again flip the sort around,
			// otherwise reset to ascending order
			setSortAscending(sort === sortName ? !sortAscending : true);
			setSortName(sort);
		}
	};

	const onFilter = (filterBy: string, filterKey: string) => {
		console.log("FilterBy: ", filterBy, " filterKey: ", filterKey);
		if (filterBy === "search") {
			setFilterString(filterKey);
		} else {
			console.log("filter by prop");
		}
	};

	useEffect(() => {
		if (sortName) {
			const sorted = data?.slice(0).sort((a: any, b: any) => {
				if (sortAscending) {
					return a[sortName] > b[sortName] ? 1 : -1;
				} else {
					return a[sortName] < b[sortName] ? 1 : -1;
				}
			});
			setData(sorted);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortName, sortAscending]);

	return (
		<main className={"main"}>
			<h1>Restaurant Table</h1>
			{data && (
				<TableElement
					onSort={onSort}
					data={data}
					onFilter={onFilter}
					columnKeys={columnKeys}
					paginationLimit={10}
				/>
			)}
		</main>
	);
};

export default RestaurantTable;

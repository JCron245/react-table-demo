import React, { useEffect, useState } from "react";
import "./restaurantTable.scss";
import { getRestaurantData } from "../../api/restaurant";
import { RestaurantData } from "../../api/interface";
import TableElement from "../Table/Table";

const RestaurantTable = () => {
  const [data, setData] = useState<RestaurantData[]>();
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sortName, setSortName] = useState<string>();

  /**
   * On component mount we will get the data
   */
  useEffect(() => {
    getRestaurantData().then((res: RestaurantData[]) => {
      setData(res);
      setSortAscending(true);
      setSortName('name');
    });
  }, []);

  const onSort = (sort: string) => {
    if (sort) {
      setSortAscending(!sortAscending);
      setSortName(sort);
    }
  }

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
  }, [sortName, sortAscending])

  return (
    <main
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Restaurant Table</h1>
      {data && <TableElement onSort={onSort} data={data} />}
    </main>
  );
};

export default RestaurantTable;

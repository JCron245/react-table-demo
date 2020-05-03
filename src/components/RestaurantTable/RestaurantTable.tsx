import React, { useEffect, useState } from "react";
import "./restaurantTable.scss";
import { getRestaurantData } from "../../api/restaurant";
import { RestaurantData } from "../../api/interface";

export const RestaurantTable = () => {
  const [data, setData] = useState<RestaurantData[]>();

  /**
   * On component mount we will get the data
   */
  useEffect(() => {
    getRestaurantData().then((res: RestaurantData[]) => {
      setData(res);
    });
  }, []);

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <h1>Restaurant Table</h1>

      <table>test</table>
    </main>
  );
};

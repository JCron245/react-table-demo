import React from "react";
import { RestaurantData } from "../../api/interface";

export interface TableElementProps {
    data: RestaurantData[];
    onSort: any;
}

const TableElement = (props: TableElementProps) => {
  const { data, onSort } = props;

  const CreateRows = () => {
    return data?.map((item: RestaurantData) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.telephone}</td>
          <td>{item.genre}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => onSort("name")}>Name</button>
          </th>
          <th>
            <button onClick={() => onSort("city")}>City</button>
          </th>
          <th>
            <button onClick={() => onSort("state")}>State</button>
          </th>
          <th>
            <button onClick={() => onSort("telephone")}>Phone #</button>
          </th>
          <th>
            <button onClick={() => onSort("genre")}>Genre</button>
          </th>
        </tr>
      </thead>
      <tbody>{CreateRows()}</tbody>
    </table>
  );
};

export default TableElement;

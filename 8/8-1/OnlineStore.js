import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StoreTable from "./StoreTable";

export default function OnlineStore() {
  const [filter, setFilter] = useState({ text: "", inStockOnly: false });

  function updateFilter(key, value) {
    setFilter({
      ...filter,
      [key]: value,
    });
  }

  const datas = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  console.log(filter);

  return (
    <div>
      <SearchBar filter={filter} updateFilter={updateFilter} />
      <StoreTable products={datas} filter={filter} />
    </div>
  );
}

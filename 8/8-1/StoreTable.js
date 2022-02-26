import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
  const { products, filter } = props;

  // products에서 filter.text가 있으면! -> 그 친구만 렌더링을 해야함
  const targetProduct = products.filter((p) => p.name === filter.text);
  const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

  const result = filteredProducts.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // key(category)가지고 있는 케이스. 배열에 추가만 하면됨
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      // 새로운 카테고리의 key를 생성하고 배열도 추가해줘야함
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(result);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductsTable
            category={key}
            items={result[key]}
            key={idx}
            inStockOnly={filter.inStockOnly}
          />
        ))}
      </tbody>
    </table>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "PRODUCT 1" },
  { id: "p2", title: "PRODUCT 2" },
  { id: "p3", title: "PRODUCT 3" },
  { id: "p4", title: "PRODUCT 4" },
];

function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((i) => (
          <li key={i.id}>
            <Link to={`/products/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;

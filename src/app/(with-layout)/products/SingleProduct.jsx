import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  const { id, title, price, features } = product;

  return (
    <Link href={`/products/${id}`}>
      <h1>{title}</h1>
    </Link>
  );
};

export default SingleProduct;

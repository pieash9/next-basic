import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { id, features, name, price, categoryId } = category;
  return (
    <Link href={`/products?categoryId=${id}`}>
      <p className="border border-blue-500 px-4 py-1 rounded bg-blue-100 shadow-lg">
        {name}
      </p>
    </Link>
  );
};

export default SingleCategory;

import React from "react";

const getAllCategories = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  return res.json();
};

export default getAllCategories;

import getAllCategories from "@/utils/getAllCategories";
import React from "react";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <div>
      <h1>Categories</h1>
      <div className="grid grid-cols-4  gap-4">
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

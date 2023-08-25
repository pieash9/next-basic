import wait from "@/utils/wait";
import React from "react";

const PopularProducts = async () => {
  await wait();
  return (
    <div>
      <h3 className="mt-5">Popular products</h3>
    </div>
  );
};

export default PopularProducts;

import Categories from "@/components/HomePage/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";

export const revalidate = false;
const HomePage = () => {
  return (
    <main className="">
      <h1>Home</h1>
      <Categories />
      <Suspense
        fallback={
          <h1 className="text-center mt-20 font-semibold text-3xl text-blue-500">
            Loading...
          </h1>
        }
      >
        <PopularProducts />
      </Suspense>
    </main>
  );
};
export default HomePage;

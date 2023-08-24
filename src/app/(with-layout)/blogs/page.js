import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Hero Pieash | Blogs",
  description: "Me hero",
};

// const blogs = [
//   {
//     id: 1,
//     title: "blog 1",
//     year: 2003,
//   },
//   {
//     id: 2,
//     title: "blog 2",
//     year: 2004,
//   },
//   {
//     id: 3,
//     title: "blog 3",
//     year: 2005,
//   },
//   {
//     id: 4,
//     title: "blog 4",
//     year: 2007,
//   },
// ];

const BlogsPage = async () => {
  const blogs = await loadBlogData();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="border border-blue-400 p-2 my-2 rounded">
          <h3 className="text-2xl">
            {" "}
            {id}. {title}
          </h3>
          <p className="my-2">{body}</p>
          <Link className="block " href={`blogs/${id}`}>
            <button className="bg-blue-500 text-white py-1 px-3 rounded">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;

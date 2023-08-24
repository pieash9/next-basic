import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogData();
  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};
const SingleBlog = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
  return (
    <div>
      SingleBlog = {params.id}
      <div key={id} className="border border-blue-400 p-2 my-2 rounded mx-5">
        <h3 className="text-2xl">
          {" "}
          {id}. {title}
        </h3>
        <p className="my-2">{body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;

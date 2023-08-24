import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen space-y-5">
      <h1>404</h1>
      <h1>Not found</h1>
      <Link className="bg-blue-500 p-2 rounded hover:bg-blue-600" href="/">GO to Home</Link>
    </div>
  );
};

export default NotFoundPage;

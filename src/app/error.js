"use client";

import React, { useEffect } from "react";

const RootError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1 className=" mt-5 text-3xl font-medium text-red-500">
        {error.message || "Something went wrong"}
      </h1>
      <button onClick={() => reset()} className="bg-red-400 p-2 rounded">
        Reset
      </button>
    </div>
  );
};

export default RootError;

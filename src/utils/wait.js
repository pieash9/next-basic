import React from "react";

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("REJECTED"), 500);
  });
};

export default wait;

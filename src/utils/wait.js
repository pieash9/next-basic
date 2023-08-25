import React from "react";

const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
};

export default wait;

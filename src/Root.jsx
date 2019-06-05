import React from "react";

import connectToStore from "./utils/connectToStore";

export default ({ children }) => {
  return connectToStore(children);
};

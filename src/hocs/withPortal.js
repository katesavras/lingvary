import ReactDom from "react-dom";
import React from "react";

export const withPortal = (Component) => (props) => {
  return ReactDom.createPortal(<Component {...props} />, document.body);
};

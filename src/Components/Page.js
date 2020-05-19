import React from "react";
import "./JssStyles/Page.css";

function Page({ children }) {
  return <section className="page">{children}</section>;
}
export default Page;

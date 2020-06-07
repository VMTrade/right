import React from "react";
import TopNavbar from "./TopNavbar";
import SubNavbar from "./SubNavbar";

export default function NavbarMain(props) {
  return (
    <div className="header clearfix">
      <TopNavbar />
      <SubNavbar />
    </div>
  );
}

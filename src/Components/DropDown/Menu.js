import React from "react";
import "./Menu.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Menu() {
  const currentUser = "Jay";
  const data = [
    {
      item: "Dashboard",
      icon: "uil uil-apps icon__1",
      link: "/dashboard",
    },
    {
      item: "My Orders",
      icon: "uil uil-box icon__1",
      link: "/dashboard/orders",
    },
    {
      item: "My Address",
      icon: "uil uil-location-point icon__1",
      link: "/dashboard/address",
    },
    {
      item: "Faq",
      icon: "uil uil-info-circle icon__1",
      link: "/faq",
    },
    {
      item: "Logout",
      icon: "uil uil-lock-alt icon__1",
      link: "/login",
    },
  ];
  return (
    <div>
      <a className="opts_account">
        <img src="images/avatar/img-5.jpg" alt="" />
        <DropdownButton className="btn" title={"Hi " + currentUser + " "}>
          {data.map((dataItem) => (
            <Dropdown.Item eventKey={dataItem.item} className="channel_item1">
              <i className={dataItem.icon}></i>
              <Link to={dataItem.link}>{dataItem.item}</Link>
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </a>
    </div>
  );
}

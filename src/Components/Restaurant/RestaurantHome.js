import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header";

export default function RestaurantHome(props) {
  const [location, setLocation] = useState(props.match.params.location);
  return (
    <div>
      <Header />
      <h1>
        These are the restaurants available in {props.match.params.location}
      </h1>
    </div>
  );
}

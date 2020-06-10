import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Location(props) {
  const [displayMenu, setdisplayMenu] = useState(false);
  const Locations = [
    "Hyderabad",
    "Gurugram",
    "New Delhi",
    "Banglore",
    "Chennai",
  ];
  const curLocation = props.curLocation;

  const toggleMenu = () => {
    setdisplayMenu(!displayMenu);
  };
  const updateLocation = (loc) => {
    props.changeLocation(loc);
    console.log("location changed");
  };
  return (
    <div>
      <i className="uil uil-location-point"></i>
      <DropdownButton
        className="btn"
        title={curLocation ? curLocation : "Pick Your Location"}
      >
        {Locations.map((Location) => (
          <Dropdown.Item
            eventKey={Location}
            className="myLoc"
            onSelect={updateLocation}
          >
            <Link to={"/" + Location}> {Location} </Link>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    curLocation: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLocation: (loc) => dispatch({ type: "SETLOCATION", payload: loc }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Location);
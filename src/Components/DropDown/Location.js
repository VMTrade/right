import React from "react";
import { connect } from "react-redux";

import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as actionCreators from "../../Store/actions/index";

function Location(props) {
  const branches = props.branches;
  const curLocation = props.curLocation;
  const updateLocation = (loc) => {
    const payload = branches.find((branch) => branch.name === loc);
    props.changeLocation(payload);
  };
  return (
    <div>
      <i className="uil uil-location-point"></i>
      <DropdownButton
        className="btn"
        title={curLocation ? curLocation : "Pick Your Location"}
      >
        {branches.map((branch) => (
          <Dropdown.Item
            eventKey={branch.name}
            className="myLoc"
            style={{ alignContent: "left" }}
            onSelect={updateLocation}
          >
            <i className="uil uil-location-point"></i>
            <Link to={branch.route}> {branch.name} </Link>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    curLocation: state.config.curLocation,
    branches: state.config.branches,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLocation: (payload) => dispatch(actionCreators.setLocation(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Location);

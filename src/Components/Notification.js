import React from "react";
import { Alert } from "react-bootstrap";

function Notification(props) {
  return (
    <Alert variant="primary" onClose={() => props.onDismiss(false)} dismissible>
      <p>{props.msg}</p>
    </Alert>
  );
}
export default Notification;

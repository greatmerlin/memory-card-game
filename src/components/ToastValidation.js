import React from "react";
import Toast from "react-bootstrap/Toast";

function ToastValidation(props) {
  const toggleShowToast = () => props.setShowToast(!props.showToast);

  return (
    <Toast
      show={props.showToast}
      onClose={toggleShowToast}
      style={{
        color: "red",
        background: "black",
        padding: 10,
        width: 300,
        margin: 20,
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">ERROR: Playername is missing</strong>
        <br />
      </Toast.Header>
      <Toast.Body style={{ padding: 10 }}>
        {" "}
        Please enter a player name in the "Name" field
      </Toast.Body>
    </Toast>
  );
}

export default ToastValidation;

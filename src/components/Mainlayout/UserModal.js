import React from "react";
import "./modal.css";
export default function UserModal(props) {
  return (
    <div className="modal-container">
      <div className={`modal ${props.modal ? "display-flex" : "display-none"}`}>
        <div className="modal-content">
          <div className="image"></div>
          <p>Username</p>
        </div>
      </div>
    </div>
  );
}

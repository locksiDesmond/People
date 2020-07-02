import React from "react";
import "./index.css";
export default function FixedTopnav(props) {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <div className="nav-logo">
          <span>Logo</span>
          <h1>People</h1>
        </div>
        <div className="search-parent">
          <input className="search" placeholder="search Employee" />
          <span>I</span>
        </div>
        <div className="nav-tools">
          <span>Clear sample data</span>
          <span>Subscription</span>
          <span>head</span>
          <span>plus </span>
          <span>info </span>
          <span>bell</span>
          <span onClick={() => props.handleModal()}>image</span>
        </div>
      </div>
    </nav>
  );
}

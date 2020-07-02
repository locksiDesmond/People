import React from "react";
import "./index.css";
import { useParams, Link } from "react-router-dom";
import * as links from "../../constants/Routes";
export default function FixedLeftNav() {
  let { id } = useParams();
  return (
    <nav className="left-nav">
      <div style={{ width: "100%" }}>
        <ul className="side-nav">
          <Link to={`/${links.HOME}`}>
            <li
              className={` side-nav-list ${id === links.HOME && "active-nav"}`}
            >
              <span>I</span>
              <span className="side-nav-name">Home</span>
              <div
                className={`sidenav-content ${
                  id === links.HOME ? "active" : "null"
                }`}
              >
                <div className="sidenav-content-items">
                  <ul className="sidenav-content-menu">
                    <li className="sidenav-content-menu-item">
                      <span>Dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <li className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> services</span>
          </li>
          <Link to={`/${links.SETTINGS}`}>
            <li
              className={` side-nav-list ${
                id === links.SETTINGS && "active-nav"
              }`}
            >
              <span>I</span>
              <span className="side-nav-name">settings</span>
              <div
                className={`sidenav-content ${
                  id === links.SETTINGS ? "active" : "null"
                }`}
              >
                <div className="sidenav-content-items">
                  <ul className="sidenav-content-menu">
                    <li className="sidenav-content-menu-item">
                      <span>Dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <li className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> services</span>
          </li>
          <li className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> services</span>
          </li>
          <li className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> services</span>
          </li>
          <li className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> services</span>
          </li>
          <Link to={`/${links.SELFSERVICE}`}>
            <li
              className={` side-nav-list ${
                id === links.SELFSERVICE && "active-nav"
              }`}
            >
              <span>I</span>
              <span className="side-nav-name">self service</span>
              <div
                className={`sidenav-content ${
                  id === links.SELFSERVICE ? "active" : "null"
                }`}
              >
                <div className="sidenav-content-items">
                  <ul className="sidenav-content-menu">
                    <li className="sidenav-content-menu-item">
                      <span>Dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>
          <li className="side-nav-list last-item">
            <div className="side-nav-list">
              <span>I</span>
              <span className="side-nav-name">settings</span>
            </div>
          </li>
          <div className="hr"></div>
          <div className="side-nav-list">
            <span>I</span>
            <span className="side-nav-name"> ----</span>
          </div>
        </ul>
      </div>
    </nav>
  );
}

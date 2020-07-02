import React, { useState } from "react";
import FixedTopnav from "../components/Mainlayout/FixedTopnav";
import FixedLeftNav from "../components/Mainlayout/FixedLeftNav";
import "./index.css";
import BodyTopNav from "../components/Mainlayout/BodyTopNav";
import FixedBottomNav from "./../components/Mainlayout/FixedBottomNav";
import UserModal from "./../components/Mainlayout/UserModal";
export default function MainLayout(props) {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <div className="mainlayout">
      <FixedTopnav handleModal={handleModal} hideModal={hideModal} />
      <div
        className={`main-body ${showModal ? "display-none" : "display-flex"}`}
      >
        <BodyTopNav />
        <FixedLeftNav />
      </div>
      <UserModal modal={showModal} />
      <FixedBottomNav />
    </div>
  );
}

import React from "react";
import { MdApps, MdNotifications, MdVideoCall } from "react-icons/md";

function RightNav() {
  return (
    <div className="buttons">
      <button className="icon-container">
        <MdVideoCall size={25} />
      </button>

      <button className="icon-container">
        <MdApps size={25} />
      </button>

      <button className="icon-container">
        <MdNotifications size={25} />
      </button>
    </div>
  );
}

export default RightNav;

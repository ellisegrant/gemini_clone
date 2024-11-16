import React, { useState } from "react";
import "./SideBar.css";
import plus from "../assets/plus_icon.png";
import message from "../assets/message_icon.png";
import question from "../assets/question_icon.png";
import history from "../assets/history_icon.png";
import setting from "../assets/setting_icon.png";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  const handleClickExtended = () => {
    setExtended(!extended)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick = {handleClickExtended} className="menu" src="/images/menu_icon.png" alt="" />
        <div className="new_chat">
          <img src={plus} alt="" />
          {extended ? <span>New chat</span> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={message} alt="" />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={question} alt="" />
            {extended? <p>Help</p> :null}
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={history} alt="" />
           {extended? <p>Activity</p>:null} 
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={setting} alt="" />
            {extended? <p>Settings</p>:null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

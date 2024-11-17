import React from "react";
import user from "../../assets/user_icon.png";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <div>
          <p>Gemini</p>
        </div>
        <div>
          <img src={user} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;

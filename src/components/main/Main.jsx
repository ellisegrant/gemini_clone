import React from "react";
import user from "../../assets/user_icon.png";
import compass from "../../assets/compass_icon.png";
import bulb from "../../assets/bulb_icon.png"
import message from "../../assets/message_icon.png"
import code from "../../assets/code_icon.png"
import gallery from "../../assets/gallery_icon.png"
import mic from "../../assets/mic_icon.png"
import send from "../../assets/send_icon.png"

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="nav-container">
          <p>Gemini</p>
        <div>
          <img src={user} alt="" />{" "}
        </div>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Ellise</span></p>
                <p>How can I assist you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Basit is a stupid boy</p>
                    <img src={compass} alt="" />
                </div>

                <div className="card">
                    <p>Keep is also a stupid boy</p>
                    <img src={bulb} alt="" />
                </div>

                <div className="card">
                    <p>they are all stupid </p>
                    <img src={message} alt="" />
                </div>

                <div className="card">
                    <p>I need to cut all of them off </p>
                    <img src={code} alt="" />
                </div>

            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Ask Gemini" />
                    <div>
                        <img src = {gallery} alt="" />
                        <img src= {mic}alt="" />
                        <img src={send} alt="" />
                    </div>
                </div>
                <p className="bottom_info">
                    At the end I was a good friend so I thought keep and basit sense 
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

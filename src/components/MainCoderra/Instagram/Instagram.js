import React from "react";
import "./_instagram.scss";
import instaLogo from "../../../assets/coderralogo.png";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';

function Instagram() {
  return (
    <div className="Instagram">
      <p className="instagramTitle">Eyni Zamanda Instagram Səhifəmizdən Bizi İzləyə Bilərsiniz</p>
      <div className="abuneOl">
          <a href="https://chat.whatsapp.com/CEMKMP48HtPBubH0MS9tNI">WhatsApp Qrupumuza Qoşulun</a>
      </div>
      <div id="box">
        <h1 className="title">@coderra.az</h1>
        <div className="top">
          <div className="img">
            <img src={instaLogo} alt="pic" />
          </div>
          <div className="followers">
            <div className="posts">
              <p><AiOutlineFieldNumber /></p>
              <p>Posts</p>
            </div>
            <div className="follower">
              <p id="increment"><BsFillPersonFill /><BsFillPersonFill /><BsFillPersonFill /></p>
              <p>Followers</p>
            </div>
            <div className="following">
              <p><BsFillPersonFill /></p>
              <p>Following</p>
            </div>
          </div>
        </div>
        <h2>🌝Front-End Proqramlaşdırma👨‍💻</h2>
        <div className="center">
          <ul>
            <li>⌛️•Html</li>
            <li>⏳•Css</li>
            <li>✴️•Sass / Scss</li>
            <li>✴️•Media Queries</li>
          </ul>
          <ul>
            <li>🕉•jQuery</li>
            <li>🕉•Javascript(ES6)</li>
            <li>⚛️•React(JS)</li>
            <li>⚛️TypeScript</li>
          </ul>
        </div>
        <div className="bottom">
          <button id="click1">
            Follow
          </button>
          <button id="click2">Message</button>
        </div>
      </div>
      <div className="abuneOl2">
      <a href="https://chat.whatsapp.com/CEMKMP48HtPBubH0MS9tNI">WhatsApp Qrupumuza Qoşulun</a>
      </div>
    </div>
  );
}

export default Instagram;

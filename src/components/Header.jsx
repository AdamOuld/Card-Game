import React, { useState } from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="main-wrapper">
        <h1>Ichcho Card Game</h1>
        <p>Avoid clicking the same Ichcho more than once!</p>
      </div>
      <div className="score-wrapper">
        <h3>Current Score: {props.currScore}</h3>
        <h3>Best Score: {props.bestScore}</h3>
      </div>
    </div>
  );
}

export default Header;

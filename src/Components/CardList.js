import React from "react";
import "../Styles/CardList.scss";

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      <div className="right-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
          <path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" />
        </svg>
        <div className="left-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardList;

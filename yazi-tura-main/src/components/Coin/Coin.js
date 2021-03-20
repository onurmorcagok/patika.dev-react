import React from "react";
import "./Coin.css";
import CoinTura from "../../Assets/1-lira-tura.png";
import CoinYazi from "../../Assets/1-lira-yazi.png";

const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={CoinTura}
          className={props.side === " Yazı" ? "Coin-back" : "Coin-front"}
          alt="Tura"
        />
        <img
          src={CoinYazi}
          className={props.side === " Yazı" ? "Coin-front" : "Coin-back"}
          alt="Yazi"
        />
      </div>
    </div>
  );
};

export default Coin;

import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

import options from "../../constants";
import { getRandomElement, findTotal } from "../../helpers";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side: options[0],
      flipping: false,
      flipCount: [],
    };
  }
  handleClick = () => {
    this.setState({ flipping: true });
    const randomElement = getRandomElement(options);
    setTimeout(
      () =>
        this.setState({ flipping: false }, () => {
          this.setState({
            side: randomElement,
            flipCount: [...this.state.flipCount].concat([randomElement]),
          });
        }),
      1000
    );
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <br />
        <button onClick={this.handleClick}>Parayı At!</button>
        <br />
        <p>
          Toplam
          <strong> {this.state.flipCount.length} </strong>
          atıştan; <br />
          <br />
          <div>
            {options.map((option) => {
              return (
                <div key={option}>
                  <b>{findTotal(this.state.flipCount, option)}</b>
                  {option}
                </div>
              );
            })}
          </div>
          <br />
          gelmiştir.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;

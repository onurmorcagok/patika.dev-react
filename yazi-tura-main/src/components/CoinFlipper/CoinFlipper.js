import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      counter: 0,
      increment: 1,
      tura: 0,
      yazi: 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);

    this.setState({ counter: this.state.counter + this.state.increment });
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
          <strong> {this.state.counter} </strong>
          atıştan; <br />
          <br />
          <strong> {this.state.tura} </strong>tanesi tura
          <strong> {this.state.yazi} </strong>
          tanesi yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;

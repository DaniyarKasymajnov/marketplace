import React, { Component } from "react";
import "../info.css";

class Info extends Component {
  render() {
    return (
      <div className="wrapper-info">
        <div className="description">
          <span className="span-info">
            <i className="fas fa-check" />
            Unique Everything
          </span>
          We have millions of one-of-a-kind items, so you can find whatever you
          need (or really, really want)
        </div>
        <div className="description">
          <span className="span-info">
            <i className="fas fa-check" />
            Independent sellers
          </span>
          Buy directly from someone who put their heart and soul into making
          something special.
        </div>
        <div className="description">
          <span className="span-info">
            <i className="fas fa-check" />
            Secure shopping
          </span>
          We use best-in-class technology to protect your transactions.
        </div>
      </div>
    );
  }
}

export default Info;

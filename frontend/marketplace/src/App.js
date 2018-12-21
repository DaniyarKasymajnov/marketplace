import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Carousel from "./components/Carousel";
import Info from "./components/Info";
import "./app.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content">
            <div className="title">
              <h1 className="header">
                If it's handcrafted, vintage, custom or unique, it's on Handy.
              </h1>
            </div>
            <div className="carousel">
              <Carousel />
            </div>
            <div className="banner">
              <Info />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

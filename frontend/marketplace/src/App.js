import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import "./app.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <h1 className="header1">hello world</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

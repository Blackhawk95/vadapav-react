import React, { Component } from "react"
//import logo from "./logo.svg"
import pavlogo from "./vada_pav.webp"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pavlogo} alt="logo" />
          <p>
            Vada Pav ?
          </p>
        </header>
      </div>
    )
  }
}

export default App

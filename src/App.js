import React, { Component } from "react"
import logo from "./logo.svg"
import pavlogo from "./vada_pav.webp"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pavlogo} alt="logo" />
          <p>
            Vada Pav ?
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App

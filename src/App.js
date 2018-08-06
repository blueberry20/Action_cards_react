import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/intro.js";
import SimpleSlider from "./components/slider.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Intro />
                <SimpleSlider />
            </div>
        );
    }
}

export default App;

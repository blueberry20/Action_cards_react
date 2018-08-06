import React, { Component } from "react";
import "./App.css";
import Intro from "./components/intro.js";
import SimpleSlider from "./components/slider.js";
import Instructions from "./components/instructions.js";
import MemoryGame from "./components/memory_game.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Intro />
                <SimpleSlider />
                <Instructions />
                <MemoryGame />
            </div>
        );
    }
}

export default App;

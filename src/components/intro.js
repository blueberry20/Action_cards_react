import React, { Component } from "react";
import boxImg from "../img/cover.jpg";

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="intro">
                <h1>Animal Action Cards</h1>
                <section id="mainSection">
                    <div className="flex xs-flex-column">
                        <div className="flexColumn col-25 xs-col-100">
                            <h2>Fun</h2>
                            <h2>Engaging</h2>
                            <h2>Activity</h2>
                        </div>
                        <div className="flexColumn col-50 xs-col-100">
                            <img id="boxImg" src={boxImg} alt="package cover" />
                        </div>
                        <div className="flexColumn col-25 xs-col-100">
                            <h2>A game</h2>
                            <h2>that gets</h2>
                            <h2>your kids</h2>
                            <h2>moving</h2>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Intro;

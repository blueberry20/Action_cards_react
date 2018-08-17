import React, { Component } from "react";
import boxImg from "../img/cover.jpg";
import flower5 from "../img/flower5.png";
import flower4 from "../img/flower4.png";

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
            // speed: this.props.speed || 1
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    handleScroll() {
        const speed = 0.4;
        const top = this.top;

        //calculate new Stomp//get current scroll level, # of pixels from the absolute top
        const pageTop = window.scrollY;
        const newTop = top - pageTop * speed;

        //set new top position
        this.refs.parallaxElement.style.top = `${newTop}px`;
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
                    <img
                        id="flower5"
                        ref="parallaxElement"
                        className={
                            this.state.scrolling
                                ? "movingFlowers animateFlowers"
                                : "movingFlowers"
                        }
                        src={flower5}
                        alt="flower"
                    />
                    <img
                        id="flower4"
                        className="movingFlowers"
                        src={flower4}
                        alt="flower"
                    />
                </section>
            </div>
        );
    }
}

export default Intro;

import React, { Component } from "react";
import boxImg from "../img/cover.jpg";
import flower5 from "../img/flower5.png";
import flower4 from "../img/flower4.png";
//import _ from "lodash";

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastScrollTop: window.scrollY
        };

        //this.lastScrollTop = window.scrollY;
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
        window.scrollTo(0, 0);
        // window.addEventListener(
        //     "scroll",
        //     _.throttle(this.handleScroll.bind(this), 100)
        // );
    }

    handleScroll() {
        let parallaxEl = this.refs.parallaxElement;
        let elementTopPosition = parallaxEl.offsetTop;
        let pageTop = window.scrollY;

        //console.log("lastScrollTop " + this.state.lastScrollTop);
        console.log("pageTop" + pageTop);
        console.log("elementTopPosition" + elementTopPosition);

        //downscroll
        if (pageTop > this.state.lastScrollTop) {
            console.log("downscroll");
            if (pageTop < 1500) {
                parallaxEl.style.top =
                    elementTopPosition + pageTop * 0.01 + "px";
            }
        } else {
            console.log("upscroll");
            //console.log(elementTopPosition);
            //upscroll
            if (pageTop < 1500) {
                parallaxEl.style.top =
                    elementTopPosition - pageTop * 0.01 + "px";
            }
        }

        this.setState({ lastScrollTop: pageTop });
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
                        className="movingFlowers"
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

import React, { Component } from "react";
import flower5 from "../img/flower5.png";
import flower4 from "../img/flower4.png";
//import _ from "lodash";

class Parallax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastScrollTop: window.scrollY
        };

        this.lastScrollTop = window.scrollY;
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
        //apply parallax functionality to each ref on page
        for (let ref in this.refs) {
            let speed = this.refs[ref].getAttribute("data-speed");
            this.parallax(this.refs[ref], speed);
        }
    }

    parallax(element, speed) {
        let parallaxEl = element;
        console.log(parallaxEl);
        let elementTopPosition = parallaxEl.offsetTop;
        let pageTop = window.scrollY;

        // console.log("lastScrollTop " + this.state.lastScrollTop);
        // console.log("pageTop" + pageTop);
        // console.log("elementTopPosition" + elementTopPosition);

        //downscroll
        if (pageTop >= this.state.lastScrollTop) {
            console.log("downscroll");
            if (pageTop < 1500) {
                parallaxEl.style.top =
                    elementTopPosition + pageTop * speed + "px";
            }
        }
        // else {
        //     console.log("upscroll");
        //     //upscroll
        //     if (pageTop < 1500) {
        //         parallaxEl.style.top =
        //             elementTopPosition - pageTop * speed + "px";
        //     }
        // }

        this.setState({ lastScrollTop: pageTop });
    }

    render() {
        return (
            <div>
                <img
                    id="flower5"
                    ref="parallaxElement1"
                    className="parallaxEl"
                    src={flower5}
                    alt="flower"
                    data-speed="0.01"
                />
                <img
                    id="flower4"
                    ref="parallaxElement2"
                    className="parallaxEl"
                    src={flower4}
                    alt="flower"
                    data-speed="0.011"
                />
            </div>
        );
    }
}

export default Parallax;

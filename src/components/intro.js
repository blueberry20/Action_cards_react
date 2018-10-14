import React, { Component } from "react";
import boxImg from "../img/cover.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <h1>Animal Action Cards</h1>
            <section id="mainSection">
                <div className="flex xs-flex-column">
                    <div className="flexColumn col-25 sm-col-100 xs-col-100">
                        <h2>A game</h2>
                        <h2>that gets</h2>
                        <h2>your kids</h2>
                        <h2>moving</h2>
                    </div>
                    <div className="flexColumn col-50 xs-col-100">
                        <img id="boxImg" src={boxImg} alt="package cover" />
                    </div>
                    <div className="flexColumn col-25 sm-col-100 xs-col-100">
                        <a
                            className="buyBtn"
                            target="_blank"
                            href="https://www.amazon.com/dp/B07H5RGLR3/"
                        >
                            Buy on amazon
                        </a>
                        <a
                            className="buyBtn"
                            href="https://www.etsy.com/listing/555614142/"
                            target="_blank"
                        >
                            Buy digital
                        </a>
                        <a
                            className="buyBtn"
                            href="https://www.etsy.com/listing/628385876"
                            target="_blank"
                        >
                            International shipping
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intro;

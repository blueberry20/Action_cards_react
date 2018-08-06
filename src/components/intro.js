import React from "react";
import boxImg from "../img/cover.jpg";

const Intro = () => {
    return (
        <section className="intro">
            <header>
                <h1>Animal Action Cards</h1>
            </header>
            <div id="mainSection">
                <div className="flex">
                    <div className="flexColumn col-25">
                        <h2>Fun</h2>
                        <h2>Engaging</h2>
                        <h2>Activity</h2>
                    </div>
                    <div className="flexColumn col-50">
                        <img id="boxImg" src={boxImg} alt="package cover" />
                    </div>
                    <div className="flexColumn col-25" />
                </div>
            </div>
        </section>
    );
};

export default Intro;

import React from "react";
import boxImg from "../img/cover.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <h1>Animal Action Cards</h1>
            <section id="mainSection">
                <div className="flex">
                    <div className="flexColumn col-25">
                        <h2>Fun</h2>
                        <h2>Engaging</h2>
                        <h2>Activity</h2>
                    </div>
                    <div className="flexColumn col-50">
                        <img id="boxImg" src={boxImg} alt="package cover" />
                    </div>
                    <div className="flexColumn col-25">
                        <h2>A game</h2>
                        <h2>that gets</h2>
                        <h2>your kids</h2>
                        <h2>moving</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intro;

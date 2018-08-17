import React from "react";
import instagramIcon from "../img/instagram.svg";

const Contact = () => {
    return (
        <section id="contactSection">
            <h3>Contact us</h3>
            <p>animalActionCardsGame@gmail.com</p>
            <p>
                <a
                    className="socialIcon"
                    href="https://www.instagram.com/whatliliadoes/"
                >
                    <img
                        src={instagramIcon}
                        alt="instagram icon"
                        target="_blank"
                    />
                </a>
            </p>
            <p className="gray">@AnimalActionCards</p>
            <p className="gray">#animalActionCards</p>
            <p className="smallFont">
                &copy; 2018. Creative Mango Ltd. All Rights Reserved.
            </p>
        </section>
    );
};

export default Contact;

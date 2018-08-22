import React from "react";
// import boxBack from "../img/box_back.jpg";
// import allCards from "../img/all_cards.jpg";
import flowers from "../img/flowers.png";

const Instructions = () => {
    return (
        <section id="instructionsSection">
            <h3>Instructions</h3>
            <h4>Version 1</h4>
            <p>
                Ask your child to take cards one by one and do the action on the
                card.
            </p>
            <h4>Version 2</h4>
            <p>
                Place cards face down and take turns taking a card and doing the
                action
            </p>
            <img src={flowers} alt="back of the game packaging" />
            <p className="standOutText">
                Come up with your own set of rules, and share with us on
                Instagram with hashtag #animalActionCards or by email
                animalActionCardsGame@gmail.com. We might include it in the next
                print version with a credit to you.
            </p>
        </section>
    );
};

export default Instructions;

import React, { Component } from "react";

import bunny from "../img/bunny.jpg";
import horse from "../img/horse.jpg";
import seal from "../img/seal.jpg";
import ant from "../img/ant.jpg";
import bird from "../img/bird.jpg";
import camel from "../img/camel.jpg";
import cat from "../img/cat.jpg";
import cheepmunk from "../img/cheepmunk.jpg";
import cheetah from "../img/cheetah.jpg";
import chicken from "../img/chicken.jpg";
import crab from "../img/crab.jpg";
import crocodile from "../img/crocodile.jpg";
import elephant from "../img/elephant.jpg";
import fish from "../img/fish.jpg";
import flamingo from "../img/flamingo.jpg";
import fox from "../img/fox.jpg";
import frog from "../img/frog.jpg";
import gorilla from "../img/gorilla.jpg";
import hyena from "../img/hyena.jpg";
import penguin from "../img/penguin.jpg";
import pig from "../img/pig.jpg";
import polar_bear from "../img/polar_bear.jpg";
import rooster from "../img/rooster.jpg";
import snake from "../img/snake.jpg";
import turtle from "../img/turtle.jpg";
import back_card from "../img/back_card.jpg";

let imageNamesArray = [
    ant,
    bird,
    bunny,
    camel,
    cat,
    cheepmunk,
    cheetah,
    chicken,
    crab,
    crocodile,
    elephant,
    fish,
    flamingo,
    fox,
    frog,
    gorilla,
    horse,
    hyena,
    penguin,
    pig,
    polar_bear,
    rooster,
    seal,
    snake,
    turtle
];

//get 7 random images
let randomCards = [];
while (randomCards.length < 6) {
    let randomCard =
        imageNamesArray[Math.floor(Math.random() * imageNamesArray.length)];
    if (randomCards.indexOf(randomCard) === -1) {
        randomCards.push(randomCard);
    }
}

//copy array with 8 random images, join them and shuffle
let randomCardsDuplicate = randomCards.slice();
let doubleRandomCardsArray = randomCards.concat(randomCardsDuplicate);
let shuffledCards = shuffle(doubleRandomCardsArray);
console.log(shuffledCards);

class MemoryGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexClicked: "",
            cardsClicked: 0
        };
    }

    renderCards() {
        // let cards = shuffledCards.map(function(item, index) {
        //     return (
        //         <img className="memoryCard" key={index} src={item} alt={item} />
        //     );
        // });

        //iterate through images and show back_cards for each.
        //when image is clicked, the index of clicked image is saved to state indexClicked
        //the second ternary operator checks if indexClicked is the same as the current image
        //in which case the image is shown
        let backCards = shuffledCards.map((image, index) => {
            return (
                <img
                    onClick={() => this.memoryCardClick(index)}
                    className="memoryCard"
                    key={index}
                    src={
                        this.state.indexClicked === ""
                            ? back_card
                            : this.state.indexClicked === index &&
                              this.state.cardsClicked < 2
                                ? image
                                : back_card
                    }
                    alt="back side of a card"
                />
            );
        });

        return backCards;
    }

    memoryCardClick(index) {
        let counter = this.state.cardsClicked;
        if (counter < 2) {
            counter++;
        } else {
            counter = 0;
        }
        this.setState({ indexClicked: index });
        this.setState({ cardsClicked: counter });
    }

    render() {
        return (
            <section id="memoryGameSection">
                <h3>Play a memory game</h3>
                <h4>
                    If you guess 2 cards that are the same, you get to do the
                    action on the card
                </h4>
                <div id="memoryGameWrapper">{this.renderCards()}</div>
            </section>
        );
    }
}

// if (this.state.indexClicked === ""){
//     return back_card
// }
// else {
//     if (this.state.indexClicked === index){
//         return image
//     }
//     else {
//         return back_card
//     }
// }

//helper functions
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !=== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

export default MemoryGame;

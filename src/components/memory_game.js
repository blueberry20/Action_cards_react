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
while (randomCards.length < 8) {
    let randomCard =
        imageNamesArray[Math.floor(Math.random() * imageNamesArray.length)];
    if (randomCards.indexOf(randomCard) == -1) {
        randomCards.push(randomCard);
    }
}

//copy array with 8 random images, join them and shuffle
let randomCardsDuplicate = randomCards.slice();
let doubleRandomCardsArray = randomCards.concat(randomCardsDuplicate);
let shuffledCards = shuffle(doubleRandomCardsArray);

let cards = shuffledCards.map(function(item, index) {
    return <img className="memoryCard" key={index} src={item} alt={item} />;
});

class MemoryGame extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="memoryGameSection">
                <h3>Play a memory game with these cards</h3>
                <div id="memoryGameWrapper">{cards}</div>
            </section>
        );
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
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

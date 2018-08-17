import React from "react";
import Slider from "react-slick";
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
import arrowLeft from "../img/arrow-left.png";
import arrowRight from "../img/arrow-right.png";

const imageData = [
    { name: flamingo, text: "Stand like a flamingo" },
    { name: bunny, text: "Jump like a bunny" },
    { name: fox, text: "Wag your tail like a fox" },
    { name: penguin, text: "Walk like a penguin" },
    { name: chicken, text: "Walk like a chicken" },
    { name: elephant, text: "Stomp like an elephant" },
    { name: turtle, text: "Walk slowly like a turtle" },
    { name: cheetah, text: "Run fast like a cheetah" },
    { name: snake, text: "Slither like a snake" },
    { name: cheepmunk, text: "Puff your cheeks like a chipmunk" },
    { name: camel, text: "Bend your knees like a camel" },
    { name: cat, text: "Stretch like a cat" },
    { name: ant, text: "March like an ant" },
    { name: crab, text: "Walk sideways like a crab" },
    { name: crocodile, text: "Chomp like a crocodile" },
    { name: fish, text: "Swim like a fish" },
    { name: gorilla, text: "Thump your chest like a gorilla" },
    { name: frog, text: "Leap like a frog" },
    { name: horse, text: "Gallop like a horse" },
    { name: bird, text: "Fly like a bird" },
    { name: hyena, text: "Laugh like a hyena" },
    { name: pig, text: "Roll like a pig" },
    { name: polar_bear, text: "Swim like a polar bear" },
    { name: rooster, text: "Walk like a rooster" },
    { name: seal, text: "Clap like a seal" }
];

const images = imageData.map(function(item, index) {
    return (
        <div className="slide" key={index}>
            <img src={item.name} alt={item.text} />
        </div>
    );
});

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="directionIcon iconRight" onClick={onClick}>
            <img src={arrowRight} alt="arrow right" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="directionIcon iconLeft" onClick={onClick}>
            <img src={arrowLeft} alt="arrow left" />
        </div>
    );
}

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
        };
        return (
            <section id="slideshowSection">
                <h3>View all cards</h3>
                <h4>You can check out all 25 cards here</h4>
                <Slider {...settings}>{images}</Slider>
            </section>
        );
    }
}

export default SimpleSlider;

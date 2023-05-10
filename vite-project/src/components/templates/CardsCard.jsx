import { useState } from "react";
import "./Cards.css";

const CardsCard = () => {

    const [value, setValue] = useState("...");
    const [suite, setSuite] = useState("...");
    const [restult, setRestult] = useState("");
    const [lastresult, setLastResult] = useState(restult);

    const odds = Math.floor((1 / 52)*100);

    function getValue() {
        var Num = Math.floor(Math.random() * 14);
        console.log(Num);
        if (Num == 0) {
            console.log("Value: Ace");
            setValue("Ace");
        } else if (Num == 1) {
            console.log("Value: 2");
            setValue("2");
        } else if (Num == 2) {
            console.log("Value: 3");
            setValue("3");
        } else if (Num == 3) {
            console.log("Value: 4");
            setValue("4");
        } else if (Num == 4) {
            console.log("Value: 5");
            setValue("5");
        } else if (Num == 5) {
            console.log("Value: 6");
            setValue("6");
        } else if (Num == 6) {
            console.log("Value: 7");
            setValue("7");
        } else if (Num == 7) {
            console.log("Value: 8");
            setValue("8");
        } else if (Num == 8) {
            console.log("Value: 9");
            setValue("9");
        } else if (Num == 9) {
            console.log("Value: 10");
            setValue("10");
        } else if (Num == 10) {
            console.log("Value: Jack");
            setValue("Jack");
        } else if (Num == 11) {
            console.log("Value: Queen");
            setValue("Queen");
        } else if (Num == 12) {
            console.log("Value: King");
            setValue("King");
        } else if (Num == 13) {
            console.log("Value: Ace");
            setValue("Ace");
        }

    }

    function getSuit() {
        var Num = Math.floor(Math.random() * 4);
        console.log(Num);
        if (Num == 0) {
            console.log("Suit: Harts");
            setSuite("Harts");
        } else if (Num == 1) {
            console.log("Suit: Spades");
            setSuite("Spades");
        } else if (Num == 2) {
            console.log("Suit: Clubs");
            setSuite("Clubs");
        } else if (Num == 3) {
            console.log("Suit: Diamonds");
            setSuite("Diamonds");
        }
    }

    function handleClick() {
        getValue();
        getSuit();
        setLastResult(restult);
        var holder = "";
        holder = value + " of " + suite;
        setRestult(holder);
    }

    return (
        <>
            <div className="card__wrapper">
                <h1 className="card__title">Card Game</h1>
                <p className="card__description">Your Odds: {odds}%</p>
                <button className="card__button" onClick={handleClick}>Go</button>
                <p className="card__content">Your Current Card: {restult}</p>
                <p className="card__content">Previous Card: {lastresult}</p>
            </div>
        </>
    );
};

export default CardsCard;
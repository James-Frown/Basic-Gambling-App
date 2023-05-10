import { useState } from "react";

const CardsCard = () => {

    const [value, setValue] = useState("");
    const [suite, setSuite] = useState("");
    const [restult, setRestult] = useState("");
    const [lastresult, setLastResult] = useState(restult);

    const odds = 1 / 52;

    function getValue() {
        var Num = Math.floor(Math.random() * 14);
        console.log(Num);
        if (Num == 0) {
            console.log("Ace");
            setValue("Ace");
        } else if (Num == 1) {
            console.log("2");
            setValue("2");
        } else if (Num == 2) {
            console.log("3");
            setValue("3");
        } else if (Num == 3) {
            console.log("4");
            setValue("4");
        } else if (Num == 4) {
            console.log("5");
            setValue("5");
        } else if (Num == 5) {
            console.log("6");
            setValue("6");
        } else if (Num == 6) {
            console.log("7");
            setValue("7");
        } else if (Num == 7) {
            console.log("8");
            setValue("8");
        } else if (Num == 8) {
            console.log("9");
            setValue("9");
        } else if (Num == 9) {
            console.log("10");
            setValue("10");
        } else if (Num == 10) {
            console.log("Jack");
            setValue("Jack");
        } else if (Num == 11) {
            console.log("Queen");
            setValue("Queen");
        } else if (Num == 12) {
            console.log("King");
            setValue("King");
        } else if (Num == 13) {
            console.log("Ace");
            setValue("Ace");
        }

    }

    function getSuit() {
        var Num = Math.floor(Math.random() * 4);
        console.log(Num);
        if (Num == 0) {
            console.log("Harts");
            setSuite("Harts");
        } else if (Num == 1) {
            console.log("Spades");
            setSuite("Spades");
        } else if (Num == 2) {
            console.log("Clubs");
            setSuite("Clubs");
        } else if (Num == 3) {
            console.log("Diamonds");
            setSuite("Diamonds");
        }
    }

    function handleClick() {
        setLastResult(restult);
        getValue();
        getSuit();
        var holder = "";
        holder = value + " of " + suite;
        setRestult(holder);
    }

    return (
        <>
            <div>
                <h1>Card Game</h1>
                <p>Your Odds: {odds}</p>
                <button onClick={handleClick}>Get Card</button>
                <p>Your Current Card: {restult}</p>
                <p>Previous Card: {lastresult}</p>
            </div>
        </>
    );
};

export default CardsCard;
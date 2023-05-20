// importing react tools
import { useState } from "react";

const CoinFlip = () => {

    // state management for result
    const [result, setResult] = useState("");

    // state management for previous result
    const [lastresult, setLastResult] = useState("");

    // declaring the odds
    const odds = Math.floor((1 / 2) * 100);

    // function to handle button click
    function handleClick() {

        // show user has clicked
        console.log("User: Clicked")

        // get a random number between 0 & 1
        var Num = Math.floor(Math.random() * 2);

        // show random number
        console.log("Random Number = " + Num);

        // update state of previous result
        setLastResult(result);

        // logic for testing random number
        if (Num == 0) {
            // show result
            console.log("Side: Heads");

            // update state of result
            setResult("Heads");
        } else if (Num == 1) {
            // show result
            console.log("Side: Tails");

            // update state of result
            setResult("Tails");
        }
    }

    return (
        <>
            <div className="">
                <h2 className="">Coin Flip</h2>
                <p className="">Your Odds: {odds}%</p>
                <button className="" onClick={handleClick}>Flip</button>
                <p className="">Current: {result}</p>
                <p className="">Previous: {lastresult}</p>
            </div>
        </>
    );
};

export default CoinFlip;
// import the react tools
import { useState } from "react";

const DiceRoll = () => {

    // state management for result
    const [result, setResult] = useState("");

    // state management for previous result
    const [lastresult, setLastResult] = useState(result);

    // declaring the odds
    const odds = Math.floor((1 / 6) * 100);

    // function to handle button click
    function handleClick() {

        // show user has clicked
        console.log("User: Clicked")

        // get a random number between 0 & 5
        var Num = Math.floor(Math.random() * 6);

        // show random number
        console.log("Random Number = " + Num);

        // update state of previous result
        setLastResult(result);

        // logic for testing random number
        if (Num == 0) {
            // show result
            console.log("Rolled 1");

            // update state of result
            setResult("1");
        } else if (Num == 1) {
            // show result
            console.log("Rolled 2");

            // update state of result
            setResult("2");
        } else if (Num == 2) {
            // show result
            console.log("Rolled 3");

            // update state of result
            setResult("3");
        } else if (Num == 3) {
            // show result
            console.log("Rolled 4");

            // update state of result
            setResult("4");
        } else if (Num == 4) {
            // show result
            console.log("Rolled 5");

            // update state of result
            setResult("5");
        } else if (Num == 5) {
            // show result
            console.log("Rolled 6");

            // update state of result
            setResult("6");
        }
    }

    return (
        <>
            <div className="">
                <h2 className="">Dice Roll</h2>
                <p className="">Your Odds: {odds}%</p>
                <button className="" onClick={handleClick}>Roll</button>
                <p className="">Current: {result}</p>
                <p className="">Previous: {lastresult}</p>
            </div>
        </>
    );
};

export default DiceRoll;
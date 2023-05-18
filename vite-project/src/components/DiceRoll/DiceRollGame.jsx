import { useState } from "react";
import "./Cards.css";

const DiceRollCard = () => {

    const [result, setResult] = useState("");
    const [lastresult, setLastResult] = useState(result);
    const odds = Math.floor((1 / 6)*100);

    function handleClick() {
        var Num = Math.floor(Math.random() * 6);
        console.log(Num);
        setLastResult(result);
        if (Num == 0) {
            console.log("Rolled 1");
            setResult("1");
        } else if (Num == 1) {
            console.log("Rolled 2");
            setResult("2");
        } else if (Num == 2) {
            console.log("Rolled 3");
            setResult("3");
        } else if (Num == 3) {
            console.log("Rolled 4");
            setResult("4");
        } else if (Num == 4) {
            console.log("Rolled 5");
            setResult("5");
        } else if (Num == 5) {
            console.log("Rolled 6");
            setResult("6");
        }
    }

    return (
        <>
            <div className="">
                <h1 className="">Dice Roll Game</h1>
                <p className="">Your Odds: {odds}%</p>
                <button className="" onClick={handleClick}>Go</button>
                <p className="">Current Side: {result}</p>
                <p className="">Previous: {lastresult}</p>
            </div>
        </>
    );
};

export default DiceRollCard;
import { useState } from "react";

const DiceRollCard = () => {

const [result, setResult] = useState("");

    function handleClick() {
        var Num = Math.floor(Math.random() * 6);
        console.log(Num);
        if (Num == 0) {
            console.log("*");
            setResult("*");
        } else if (Num == 1) {
            console.log("**");
            setResult("**");
        } else if (Num == 2) {
            console.log("***");
            setResult("***");
        } else if (Num == 3) {
            console.log("****");
            setResult("****");
        } else if (Num == 4) {
            console.log("*****");
            setResult("*****");
        } else if (Num == 5) {
            console.log("******");
            setResult("******");
        }
    }

    return (
        <>
            <div>
                <h1>Dice Roll Game</h1>
                <button onClick={handleClick}>Roll Dice</button>
                <p>The Result is: {result}</p>
            </div>
        </>
    );
};

export default DiceRollCard;
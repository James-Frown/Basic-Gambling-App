import { useState } from "react";

const DiceRollCard = () => {

    const [result, setResult] = useState("");

    function handleClick() {
        var Num = Math.floor(Math.random() * 6);
        console.log(Num);
        if (Num == 0) {
            console.log("1");
            setResult("1");
        } else if (Num == 1) {
            console.log("2");
            setResult("2");
        } else if (Num == 2) {
            console.log("3");
            setResult("3");
        } else if (Num == 3) {
            console.log("4");
            setResult("4");
        } else if (Num == 4) {
            console.log("5");
            setResult("5");
        } else if (Num == 5) {
            console.log("6");
            setResult("6");
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
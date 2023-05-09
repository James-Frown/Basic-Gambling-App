import "./CoinFlipCard.css";
import { useState } from "react";

const CoinFlipCard = () => {

const [result, setResult] = useState("");

    function handleClick() {
        var Num = Math.floor(Math.random() * 2);
        console.log(Num);
        if (Num == 0) {
            console.log("Heads");
            setResult("Heads");
        } else if (Num == 1) {
            console.log("Tails");
            setResult("Tails");
        }
    }

    return (
        <>
            <div>
                <h1>Coin Flip Game</h1>
                <button onClick={handleClick}>Flip Coin</button>
                <p>The Result is: {result}</p>
            </div>
        </>
    );
};

export default CoinFlipCard;
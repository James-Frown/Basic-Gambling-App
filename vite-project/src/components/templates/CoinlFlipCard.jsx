import { useState } from "react";

const CoinFlipCard = () => {

    const [result, setResult] = useState("");
    const [lastresult, setLastResult] = useState(result);
    const odds = 1 / 2;

    function handleClick() {
        var Num = Math.floor(Math.random() * 2);
        console.log(Num);
        setLastResult(result);
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
                <p>Your Odds: {odds}</p>
                <button onClick={handleClick}>Flip Coin</button>
                <p>Your Current Flip: {result}</p>
                <p>Previous Flip: {lastresult}</p>
            </div>
        </>
    );
};

export default CoinFlipCard;
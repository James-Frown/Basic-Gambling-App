import { useState } from "react";
import "./Cards.css";


const CoinFlipCard = () => {

    const [result, setResult] = useState("");
    const [lastresult, setLastResult] = useState(result);
    const odds = Math.floor((1 / 2)*100);

    function handleClick() {
        var Num = Math.floor(Math.random() * 2);
        console.log(Num);
        setLastResult(result);
        if (Num == 0) {
            console.log("Side: Heads");
            setResult("Heads");
        } else if (Num == 1) {
            console.log("Side: Tails");
            setResult("Tails");
        }
    }

    return (
        <>
            <div className="card__wrapper">
                <h1 className="card__title">Coin Flip Game</h1>
                <p className="card__description">Your Odds: {odds}%</p>
                <button className="card__button" onClick={handleClick}>Go</button>
                <p className="card__content">Your Current Flip: {result}</p>
                <p className="card__content">Previous Flip: {lastresult}</p>
            </div>
        </>
    );
};

export default CoinFlipCard;
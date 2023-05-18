import { useState } from "react";

const CoinFlip = () => {

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
            <div className="">
                <h1 className="">Coin Flip Game</h1>
                <p className="">Your Odds: {odds}%</p>
                <button className="" onClick={handleClick}>Go</button>
                <p className="">Current Side: {result}</p>
                <p className="">Previous: {lastresult}</p>
            </div>
        </>
    );
};

export default CoinFlip;
import { useState } from "react";
import "./Cards.css";


const MinerCard = () => {

    const [find, setFind] = useState(0);
    const [total, setTotal] = useState(find);
    const Win = Math.floor((1 / 4) * 100);
    const JackPot = Math.floor(((1 / 4)*(1 / 10)) * 100);
    const MegaLoss = Math.floor(((3 / 4)*(1 / 6)) * 100);

    function handleLucky() {
        var Num = Math.floor(Math.random() * 10);
        if (Num == 0) {
            console.log("Found: 0 points");
            setFind(0);
        } else if (Num == 1) {
            console.log("Found: 10 points");
            setFind(+10);
        } else if (Num == 2) {
            console.log("Found: 15 points");
            setFind(+15);
        } else if (Num == 3) {
            console.log("Found: 20 points");
            setFind(+20);
        } else if (Num == 4) {
            console.log("Found: 50 points");
            setFind(+50);
        } else if (Num == 5) {
            console.log("Found: 75 points");
            setFind(+75);
        } else if (Num == 6) {
            console.log("Found: 100 points");
            setFind(+100);
        } else if (Num == 7) {
            console.log("Found: 150 points");
            setFind(+150);
        } else if (Num == 8) {
            console.log("Found: 250 points");
            setFind(+250);
        } else if (Num == 9) {
            console.log("Found: 10000 points");
            setFind(+10000);
        }
        setTotal(find + total);
        console.log("Total points: " + total)
    }

    function handleUnlucky() {
        var Num = Math.floor(Math.random() * 6);
        if (Num == 0) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 1) {
            console.log("Lost: 10 points");
            setFind(-10);
        } else if (Num == 2) {
            console.log("Lost: 20 points");
            setFind(-20);
        } else if (Num == 3) {
            console.log("Lost: 100 points");
            setFind(-100);
        } else if (Num == 4) {
            console.log("Lost: 200 points");
            setFind(-200);
        } else if (Num == 5) {
            console.log("Lost: 1000 points");
            setFind(-1000);
        } else if (Num == 6) {
            console.log("Lost: 2000 points");
            setFind(-2000);
        }
        setTotal(find + total);
        console.log("Total points: " + total)
    }

    function handleClick() {
        var Num = Math.floor(Math.random() * 4);
        if (Num == 0) {
            console.log("You Are Lucky");
            handleLucky();
        } else if (Num == 1) {
            console.log("You Are Un-Lucky");
            handleUnlucky();
        } else if (Num == 2) {
            console.log("You Are Un-Lucky");
            handleUnlucky();
        } else if (Num == 3) {
            console.log("You Are Un-Lucky");
            handleUnlucky();
        }
    }

    return (
        <>
            <div className="">
                <h1 className="">Lost & Found Game</h1>
                <p className="">Odds of Winning: {Win}%</p>
                <p className="">Odds of JackPot: {JackPot}%</p>
                <p className="">Odds of MegaLoss: {MegaLoss}%</p>
                <div className="">
                    <button className="" onClick={handleClick}>-1-</button>
                    <button className="" onClick={handleClick}>-2-</button>
                    <button className="" onClick={handleClick}>-3-</button>
                    <button className="" onClick={handleClick}>-4-</button>
                </div>
                <p className="">Current Find: {find}</p>
                <p className="">Total Points: {total}</p>
            </div>
        </>
    );
};

export default MinerCard;
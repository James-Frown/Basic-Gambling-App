// import the react tools
import { useState } from "react";

const MysteryMiner = () => {

    // state management for find
    const [find, setFind] = useState(0);

    // state management for total
    const [total, setTotal] = useState(find);

    // declaring the odds
    const JackPot = Math.floor(((1 / 4) * (1 / 10)) * 100);

    // declaring the odds
    const MegaLoss = Math.floor(((3 / 4) * (1 / 6)) * 100);

    // function to handle lucky find
    function handleLucky() {
        var Num = Math.floor(Math.random() * 10);
        if (Num == 0) {
            console.log("Found: 5 points");
            setFind(+5);
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

    // function to handle unlucky find
    function handleUnlucky() {
        var Num = Math.floor(Math.random() * 7);
        if (Num == 0) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 1) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 2) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 3) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 4) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 5) {
            console.log("Lost: 0 points");
            setFind(0);
        } else if (Num == 6) {
            console.log("Lost: 0 points");
            setFind(0);
        }
        setTotal(find + total);
        console.log("Total points: " + total)
    }

    // function to handle click
    function handleClick() {

        // show user has clicked
        console.log("User: Clicked")

        if (total >= 250) {
            // show user has enough credits
            console.log("User: has credits")

            // update state of total
            setTotal(total - 250);

            // get a random number between 0 & 5
            var Num = Math.floor(Math.random() * 2);

            // show random number
            console.log("Random Number = " + Num);

            // logic for testing random number
            if (Num == 0) {
                console.log("You Are Lucky");
                handleLucky();
            } else if (Num == 1) {
                console.log("You Are Un-Lucky");
                handleUnlucky();
            }

        } else {
            // show user has no credits
            console.log("User: has no credits")
        }


    }

    // function to handle click
    function addCredits() {

        // show user has clicked
        console.log("User: Clicked")

        // show user has added credits
        console.log("User: Added 1000 Credits");

        // update state of total
        setTotal(total + 1000);
    }

    return (
        <>
            <div className="">
                <h2 className="">Mystery Miner</h2>
                <p className="">Cost Per Spin: 250 Credits</p>
                <p className="">Odds of JackPot: {JackPot}%</p>
                <p className="">Odds of MegaLoss: {MegaLoss}%</p>
                <div className="">
                    <button className="" onClick={handleClick}>1</button>
                    <button className="" onClick={handleClick}>2</button>
                    <button className="" onClick={handleClick}>3</button>
                    <button className="" onClick={handleClick}>4</button>
                </div>
                <p className="">Current: {find}</p>
                <p className="">Balance: {total}</p>
                <div className="">
                    <button className="" onClick={addCredits}>Add Credits</button>
                </div>
            </div>
        </>
    );
};

export default MysteryMiner;
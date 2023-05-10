import { useState } from "react";
import "./Cards.css";


const BlackJack = () => {

    const odds = Math.floor((1 / 4) * 100);

    // 1 = Harts, 2 = Diamonds, 3 = Spades, 4 = Clubs
    // const suites = [1, 2, 3, 4]
    // const [suites, setSuites] = useState([]);

    const Ranks = [{Ace}, {2}, {3}]
    const Suites = [{"Harts": }, {Diamonds}, {Spades}, {Clubs}]

    // 1 = Soft Ace, 11 = Jack, 12 = Queen, 13 = King, 14 = Hard Ace
    // const values = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    // const [values, setValues] = useState([])

    // A Deck Holds Values and Suites
    // const deck = [suites, values];
    const [deck, setDeck] = useState({});

    // Dealers Cards
    var Dcards = [];

    // Players Cards
    var Pcards = [];

    // Logic
    // Decks = 52
    // Suites = 4
    // Values = 14

    function newDeck() {
        setDeck({[]})
    }

    function handleDeal() {

    }

    function handleHit() {

    }

    function handleStand() {

    }

    function handleSplit() {

    }

    function handleDubble() {

    }

    return (
        <>
            <div className="card__wrapper">
                <h1 className="card__title">Blalck Jack</h1>
                <p className="card__description">Odds of Winning: {odds}%</p>
                <div className="card__content__wrapper">
                    <p className="card__content">Dealer:</p>
                    <p className="card__content">{Dcards}</p>
                    <p className="card__content">Player:</p>
                    <p className="card__content">{Pcards}</p>
                </div>
                <div className="card__guess__wrapper">
                    <button className="card__button" onClick={handleDeal}>Deal</button>
                    <button className="card__button" onClick={handleHit}>Hit</button>
                    <button className="card__button" onClick={handleStand}>Stand</button>
                    <button className="card__button" onClick={handleSplit}>Split</button>
                    <button className="card__button" onClick={handleDubble}>Dubble</button>
                </div>
            </div>
        </>
    );
};

export default BlackJack;
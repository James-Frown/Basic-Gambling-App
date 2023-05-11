import { useState } from "react";
import "./Cards.css";


const BlackJack = () => {

    const odds = Math.floor((1 / 4) * 100);

    // declare the value of face cards
    const Ace = 1 || 11;
    const Jack = 10;
    const Queen = 10;
    const King = 10;

    // declare the cards in a suite
    const harts = [Ace, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace];
    const diamonds = [Ace, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace];
    const clubs = [Ace, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace];
    const spades = [Ace, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace];

    // declare the cards in a deck
    const deck = [harts, diamonds, clubs, spades];

    // declare Dealers Cards
    var Dcards = [];

    // declare Players Cards
    var Pcards = [];

    function newDeck() {
        const newdeck = deck;
        return (newdeck);
    }

    function getPlayersCards() {
        newDeck()
    }

    function handleDeal() {
        getPlayersCards()
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
                </div>
                <div className="card__guess__wrapper">
                    <button className="card__button" onClick={handleHit}>Hit</button>
                    <button className="card__button" onClick={handleStand}>Stand</button>
                </div>
                <div className="card__guess__wrapper">
                    <button className="card__button" onClick={handleSplit}>Split</button>
                    <button className="card__button" onClick={handleDubble}>Dubble</button>
                </div>
            </div>
        </>
    );
};

export default BlackJack;
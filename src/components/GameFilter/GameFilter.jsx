// import the react tools
import { useState } from 'react';

// importing the game pages
import CoinFlip from '../CoinFlip/CoinFlipGame';
import DiceRoll from '../DiceRoll/DiceRollGame';
import MysteryMiner from '../BlockMiner/MinerGame';

// import the styling
import './GameFilter.css';

const GameFilter = () => {

    // state management for content
    const [content, setContent] = useState();

    // function to show coinflip game
    function showCoinFlip() {

        // show user has clicked
        console.log("User: Clicked")

        // show what user has clicked
        console.log("Selected: CoinFlip Game")

        // update state of content
        setContent(<CoinFlip />);
    }

    // function to show diceroll game 
    function showDiceRoll() {

        // show user has clicked
        console.log("User: Clicked")

        // show what user has clicked
        console.log("Selected: CoinFlip Game")

        // update state of content
        setContent(<DiceRoll />);
    }

        // function to show diceroll game 
        function showSlot() {

            // show user has clicked
            console.log("User: Clicked")
    
            // show what user has clicked
            console.log("Selected: Mystery Miner")
    
            // update state of content
            setContent(<MysteryMiner />);
        }

    return (
        <>
            <div className='games_wrapper'>
                <div className='heading__wrapper'>
                    <h1 className='games__heading'>
                        GameHub
                    </h1>
                    <p className='games__description'>
                        A place to enjoy some basic games i have made...
                    </p>
                </div>
                <div className='button__wrapper'>
                    <button className='button__selector' onClick={showCoinFlip}>
                        CoinFlip Game
                    </button>
                    <button className='button__selector' onClick={showDiceRoll}>
                        DiceRoll Game
                    </button>
                    <button className='button__selector' onClick={showSlot}>
                        Slot Game
                    </button>
                </div>
                <div className='content__wrapper'>
                    {content}
                </div>
            </div>
        </>
    );
};

export default GameFilter;
// importing the game pages
import CoinFlip from '../CoinFlip/CoinlFlipGame';

// import the react tools
import { useState } from 'react';

// import the styling
import './GameFilter.css';

const GameFilter = () => {

    // state management for content
    const [content, setContent] = useState();

    // function to show content
    function showCoinFlip() {
        console.log("User: Clicked")
        console.log("Selected: CoinFlip Game")
        setContent(CoinFlip);
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
                </div>
                <div className='content__wrapper'>
                    {content}
                </div>
            </div>
        </>
    );
};

export default GameFilter;
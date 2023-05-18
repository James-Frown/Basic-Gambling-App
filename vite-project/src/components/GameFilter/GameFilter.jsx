// importing the game pages

// import the react tools
import { useState } from 'react';

// import the styling
import './GameFilter.css';

const GameFilter = () => {

    // create the states for the game filter
    function [content, setContent] = useState();

    return (
        <>
            <div className='games_wrapper'>
                <div className='heading__wrapper'>
                    <h1 className='games__heading'>
                        Games
                    </h1>
                    <p className='games__description'>
                        Here are a few games that i offer:
                    </p>
                </div>
                <div className='button__wrapper'>
                    <button className='button__selector'>
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
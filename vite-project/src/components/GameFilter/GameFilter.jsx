// importing the game pages
import 

// import the react tools
import { useState } from 'react';

// import the styling
import './GameFilter.css';

const GameFilter = () => {

    // state management for content
    const [content, setContent] = useState();

    // function to show content
    function game1() {
        setContent();
    }

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
                    <button className='button__selector' onClick={game1}>
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
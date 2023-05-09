const flipCoin = () => {
    const heads = 1;
    const tails = 2;
    var getRandom = Math.random() + 1;
    var result = 0;

    if (getRandom == 0) {
        console.log("error");
    } else if (getRandom == 1) {
        console.log("heads");
        result == heads;
    } else if (getRandom == 2) {
        console.log("tails");
        result == tails;
    }

    return (
        <>
            <button onClick={flipCoin}>
                {result}
            </button>
        </>
    )
}

export default flipCoin;
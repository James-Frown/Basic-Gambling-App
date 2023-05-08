import "../atoms/atoms.css";

export const button = (props) => {

    const handleClick = () => {
        
    }

    return (
        <>
            <button onClick={handleClick} className={props.buttonStyle}>
                {props.content}
            </button>
        </>
    );
};

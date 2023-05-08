import "../atoms/atoms.css";

export const button = (props) => {
    return (
        <>
            <button onClick={props.handleClick} className={props.buttonStyle}>
                {props.content}
            </button>
        </>
    );
};

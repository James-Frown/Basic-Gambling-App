import "../atoms/atoms.css";

export const input = (props) => {
    return (
        <>
            <label className={props.lableStyle}>
                {props.lableContent}
                <input className={props.inputStyle}>
                    {props.inputContent}
                </input>
            </label>
        </>
    );
};
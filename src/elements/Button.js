import React from "react";
import "./style.css";

const Button = ({ text, fullWidth, handleClick, type }) => {
    return (
        <button 
            className={`button ${fullWidth ? "fullWidth" : "" } ${type}`}
            onClick={() => handleClick()}
        >
            {text}
        </button>
    );
};

export default Button;
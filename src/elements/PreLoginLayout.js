import React from "react";
import { logo } from "../constants";
import "./style.css";

const PreLoginLayout = ({ children, heading }) => {
    return (
        <div className="preLoginLanding">
            <div className="preloginLogo logo">
                {logo}
            </div>
            <div className="formCard">
                <div className="formHeading">{heading}</div>
                {children}
            </div>
        </div>
    )
};

export default PreLoginLayout;
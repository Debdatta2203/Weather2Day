import React from "react";
import { isEmpty } from "../common";
import "./style.css";

const Toast = ({ text }) => {
    return !isEmpty(text)
        ? (
            <div className="toastMsg">
                ⓘ&nbsp;&nbsp;{text}
            </div>
        )
        : null;
};

export default Toast;
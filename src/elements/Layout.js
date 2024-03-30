import React from "react";
import Navbar from "./Navbar";

const Layout = ({ heading, children, existingUser, setIsLoggedIn }) => {
    return (
        <div className="layout">
            <Navbar existingUser={existingUser} setIsLoggedIn={setIsLoggedIn} />
            <div className="container">
                <div className="heading">
                    {heading}
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
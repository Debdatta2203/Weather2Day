import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../constants";

const Navbar = ({ existingUser, setIsLoggedIn }) => {
    const history = useNavigate();
    const profileDropdownRef = useRef();
    const [showDropdown, setShowdropdown] = useState(false);

    // close the dropdown when clicked outside it
    const useOutsideAlerterDropdown = (ref) => {
        useEffect(() => {
            const handleClickOutside = (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    setShowdropdown(false);
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref])
    };

    useOutsideAlerterDropdown(profileDropdownRef);

    return (
        <div className="navbar">
            <div className="logo" onClick={() => history("/")}>
                {logo}
            </div>
            <div className="user">
                <div className="profile" onClick={() => setShowdropdown(true)}>
                    {existingUser.slice(0,1)}
                </div>
                {showDropdown
                    ? (
                        <div className="userDropdown" ref={profileDropdownRef}>
                            <a className="menuOption" href="/userProfile">My Profile</a>
                            <div className="menuOption" onClick={() => {
                                setIsLoggedIn(false);
                                history('/')
                            }}>
                                Logout
                            </div>
                        </div>
                    )
                    : null
                }
            </div>
        </div>
    );
};

export default Navbar;
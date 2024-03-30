import React from "react";
import Layout from "../elements/Layout";
import Button from "../elements/Button";

const UserProfile = ({ setShowToast, existingUser, isLoggedIn, setIsLoggedIn }) => {
    return (
        <Layout heading="My Profile" existingUser={existingUser} setIsLoggedIn={setIsLoggedIn}>
            <div className="basicDetails">
                <div className="userAvatar">
                    {existingUser.slice(0,1)}
                </div>
                <div className="userDetails">
                    <div className="userDetailsHeading">{localStorage.getItem("username")}</div>
                    <div className="userEmail">{existingUser}</div>
                </div>
            </div>
            <div className="userDetails">
                <div className="userDetailsHeading">More Details</div>
                <div className="userForm">
                    <input className="weatherInputField halfwidth maginTop" placeholder="Enter your first name" />
                    <input className="weatherInputField halfwidth maginTop" placeholder="Enter your last name" />
                    <input className="weatherInputField halfwidth maginTop" placeholder="Enter your city" />
                    <input className="weatherInputField halfwidth maginTop" placeholder="Enter your country" />
                </div>
                <div className="userBtn">
                    <Button
                        text="Submit"
                        type="primary"
                        handleClick={() => setShowToast("User Details stored successfully.")}
                    />
                </div>
            </div>
        </Layout>
    )
};

export default UserProfile;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import PreLoginLayout from "../elements/PreLoginLayout";
import { isEmpty } from "../common";
import "./style.css";

const SignUp = ({ setShowToast, existingUser, isLoggedIn }) => {
    const history = useNavigate();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState({
        userName: false,
        email: false
    });

    useEffect(() => {
        if(isLoggedIn) {
            history("/homepage");
        }
    }, []);

    const handleSubmit = () => {
        if(isEmpty(userName)) {
            setError({
                ...error,
                userName: true
            })
        } else if (isEmpty(userEmail)) {
            setError({
                ...error,
                email: true
            })
        } else {
            if(!error?.email) {
                setShowToast(`${userName} registered successfully. Confirmation email sent.`);
                localStorage.setItem("username", userName);
                localStorage.setItem("email", userEmail);
                setTimeout(() => {
                    history("/");
                }, 3000)
            }
        }
    };

    return (
       <PreLoginLayout heading="SignUp">
            <div className="form">
                <div>
                    <label className="label">UserName</label>
                    <input 
                        className={`inputField ${error?.userName ? "inputError" : ""}`} 
                        placeholder="Enter your userName"
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        onBlur={(e) => {
                            if(isEmpty(e.target.value)) {
                                setError({
                                    ...error,
                                    userName: true
                                })
                            } else {
                                setError({
                                    ...error,
                                    userName: false
                                })
                            }
                        }}
                    />
                </div>
                
                <div>
                    <label className="label">Email</label>
                    <input 
                        className={`inputField ${error?.email ? "inputError" : ""}`} 
                        placeholder="Enter your email"
                        value={userEmail} 
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                            if(existingUser === e.target.value) {
                                setError({
                                    ...error,
                                    email: true
                                })
                                setShowToast("User already exists!");
                            } else {
                                setError({
                                    ...error,
                                    email: false
                                })
                            }
                        }} 
                        onBlur={(e) => {
                            if(isEmpty(e.target.value)) {
                                setError({
                                    ...error,
                                    email: true
                                })
                            } else {
                                setError({
                                    ...error,
                                    email: false
                                })
                            }
                        }}
                    />
                </div>

                <Button
                    handleClick={() => handleSubmit()}
                    text="Sign Up"
                    type="primary"
                    fullWidth={true}
                />
            </div>
            <div className="formCardFooter">
                Existing User?&nbsp;
                <a href="/">Login</a>
            </div>
       </PreLoginLayout>
    );
};

export default SignUp;
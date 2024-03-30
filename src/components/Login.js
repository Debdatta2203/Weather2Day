import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PreLoginLayout from "../elements/PreLoginLayout";
import { isEmpty } from "../common";
import Button from "../elements/Button";
import "./style.css";

const Login = ({ setShowToast, existingUser, isLoggedIn }) => {
    const history = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if(isLoggedIn) {
            history("/homepage");
        }
    }, []);

    const handleSubmit = () => {
        if(isEmpty(userEmail)) {
            setError(true);
        } else {
            if(existingUser === userEmail) {
                setShowToast("Logged In sucessfully");
                localStorage.setItem("isLoggedIn", "yes");
                window.location.reload();
            } else {
                setShowToast("User not found.");
                setTimeout(() => {
                    history("/signUp");
                }, 2000)
            }
        }
    };

    return (
        <PreLoginLayout heading="Login">
            <div className="form">
                <div>
                    <label className="label">Email</label>
                    <input 
                        className={`inputField ${error?.email ? "inputError" : ""}`} 
                        placeholder="Enter your email"
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        onBlur={(e) => {
                            if(isEmpty(e.target.value)) {
                                setError(true)
                            }
                        }}
                    />
                </div>
                <Button
                    handleClick={() => handleSubmit()}
                    text="Login"
                    type="primary"
                    fullWidth={true}
                />
            </div>
            <div className="formCardFooter">
                Not Registered Yet?&nbsp;
                <a href="/signUp">SignUp</a>
            </div>
        </PreLoginLayout>
    );
};

export default Login;
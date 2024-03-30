import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Toast from './elements/Toast';
import { isEmpty } from './common';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
	const existingUser = localStorage.getItem("email") || "";
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "yes" || false);
	const [showToast, setShowToast] = useState("");

	useEffect(() => {
		if(!isEmpty(showToast)) {
			setTimeout(() => {
				setShowToast("");
			}, 5000);
		}
	}, [showToast]);

	useEffect(() => {
        if(!isLoggedIn) {
            localStorage.removeItem("isLoggedIn");
        }
    }, [isLoggedIn]);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route 
						path='/' 
						element={
							<Login 
								setShowToast={(value) => setShowToast(value)} 
								existingUser={existingUser} 
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
					<Route 
						path='/signUp' 
						element={
							<SignUp 
								setShowToast={(value) => setShowToast(value)} 
								existingUser={existingUser} 
								isLoggedIn={isLoggedIn} 
							/>
						} 
					/>
					<Route 
						path='/homepage' 
						element={
							<HomePage 
								setShowToast={(value) => setShowToast(value)} 
								existingUser={existingUser} 
								isLoggedIn={isLoggedIn} 
								setIsLoggedIn={(value) => setIsLoggedIn(value)}
							/>
						} 
					/>
					<Route
						path='/userProfile'
						element={
							<UserProfile
								setShowToast={(value) => setShowToast(value)} 
								existingUser={existingUser} 
								isLoggedIn={isLoggedIn} 
								setIsLoggedIn={(value) => setIsLoggedIn(value)}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Toast
				text={showToast}
			/>
		</div>
	);
}

export default App;

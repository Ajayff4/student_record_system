import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(false);          //React hook for Login
    const [showSignup, setShowSignup] = useState(false);        //React hook for Signup

    const setStateDictionary = {
        "Login": setShowLogin,
        "Signup": setShowSignup
    };

    const updateAllState = (event) => {
        for (const state in setStateDictionary) {
            setStateDictionary[state](false);
        }
        for (const state in setStateDictionary) {
            if (event.target.id === state) {
                setStateDictionary[state](true);
                break;
            }
        }
        //in the case of Home, there is no state variable declared, so no state remains active and page cleans.
    }

    return (
        <>
            <header><h1>HomePage</h1></header>
            <ul>
                <button onClick={updateAllState} id="Home">Home</button>
                <button onClick={updateAllState} id="Login">Log In</button>
                <button onClick={updateAllState} id="Signup">SignUp</button>
            </ul>
            {showLogin ? <LogIn /> : null}
            {showSignup ? <SignUp /> : null}
            <footer><h1>&copy; Copyright@2020</h1></footer>
        </>
    )
}

export default HomePage;
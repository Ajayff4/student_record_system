import React from 'react';
import '../styles/styles.css';

const LogIn = () => {
    return (
        <div className="formDiv">
            <fieldset>
                <legend>Log In Form</legend>
                <form>
                    <input type="text" id="username"
                        placeholder="Enter username"
                        name="username" required
                    />
                    <br />
                    <input type="password" id="password"
                        placeholder="Enter password"
                        name="password" required
                    />
                    <hr />
                    <button type="submit">Log In</button>
                </form>
            </fieldset >
        </div >
    )
}

export default LogIn;
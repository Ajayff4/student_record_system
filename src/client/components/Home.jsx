import React from 'react';
import '../styles/styles.css';

const Home = (props) => {
    return (
        <div id="home">
            <fieldset>
                <legend>Welcome to Home!</legend>
                <table id="infoTable">
                    <tbody>
                        <tr key={"title"}><td>Poem:</td><td>Student Record System</td></tr>
                        <tr key={"tech"}><td>Technology used:</td><td>React, Cookies, Router</td></tr>
                        <tr key={"tool"}><td>Tools used:</td><td>VS Code</td></tr>
                        <tr key={"name"}><td>Author:</td><td>Ajay Agrawal</td></tr>
                    </tbody>
                </table>
            </fieldset >
        </div >
    )
}

export default Home;
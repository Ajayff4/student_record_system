import React from 'react';
import Table from 'react-bootstrap/Table'
import '../styles/styles.css';

const Home = () => {
    return (
        <div id="home">
            <fieldset>
                <legend>Welcome to Home!</legend>
                <Table><tbody>
                    <tr><td>Poem:</td><td>Student Record System</td></tr>
                    <tr><td>Technology used:</td><td>React, Hooks</td></tr>
                    <tr><td>Tools used:</td><td>VS Code</td></tr>
                    <tr><td>Author:</td><td>Ajay Agrawal</td></tr>
                </tbody></Table>
            </fieldset >
        </div >
    )
}

export default Home;
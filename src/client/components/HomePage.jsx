import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';
import AddStudent from './AddStudent';
import UpdateStudent from './UpdateStudent';
import SearchStudent from './SearchStudent';

//React hook mimics state property of React classes.

const HomePage = () => {
    const [login, setLogin] = useState(false);                  //React hook for Login
    const [signup, setSignup] = useState(false);                //React hook for Signup
    const [addStudent, setAddStudent] = useState(false);        //React hook for Add Student
    const [updateStudent, setUpdateStudent] = useState(false);  //React hook for Update Student
    const [searchStudent, setSearchStudent] = useState(false);  //React hook for Search Student
    const [home, setHome] = useState(true);                     //React hook for Home

    const stateDictionary = {
        "Login": setLogin,
        "Signup": setSignup,
        "Home": setHome,
        "Add": setAddStudent,
        "Update": setUpdateStudent,
        "Search": setSearchStudent
    };

    //const state = [home, login, signup, addStudent, updateStudent, searchStudent];

    const updateAllState = (event) => {
        for (const state in stateDictionary) {
            stateDictionary[state](false);
        }
        for (const state in stateDictionary) {
            if (event.target.id === state) {
                stateDictionary[state](true);
                break;
            }
        }
    }

    return (
        <>
            <header>
                <h2>HomePage</h2>
                <CurrentDate />
                <CurrentTime />
            </header>
            <center>
                <ul>
                    <button onClick={updateAllState} id="Home">Home</button>
                    <button onClick={updateAllState} id="Login">Log In</button>
                    <button onClick={updateAllState} id="Signup">SignUp</button>
                    <button onClick={updateAllState} id="Add">AddStudent</button>
                    <button onClick={updateAllState} id="Update">UpdateStudent</button>
                    <button onClick={updateAllState} id="Search">SearchStudent</button>
                </ul>
            </center>

            {home ? <center><Home /></center> : null}
            {login ? <center><LogIn /></center> : null}
            {signup ? <center><SignUp /></center> : null}
            {addStudent ? <center><AddStudent /></center> : null}
            {updateStudent ? <center><UpdateStudent /></center> : null}
            {searchStudent ? <center><SearchStudent /></center> : null}

            <footer><h2>All Rights Reserved Copyright&copy;2020</h2></footer>
        </>
    )
}

export default HomePage;
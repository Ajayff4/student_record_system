import React, { Component } from 'react';
import '../styles/styles.css';
import axios from 'axios';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        if (this.props.cookies.username !== undefined) {
            axios.post("profile/", { username: this.props.cookies.username },
                { headers: { "Content-Type": "application/json" } }
            ).then(user => {
                this.setState({ userData: user.data });
            })
        }
    };

    render() {
        let userData = this.state.userData;
        console.log("data found: ", userData);
        console.log("session", this.props.cookies.username);
        let tableData = [];
        for (let userAttribute in userData) {
            if (userAttribute === "status") {
                if (userData[userAttribute] === 1) {
                    tableData.push(<tr key={userAttribute}><td>{userAttribute}</td><td>{"Active"}</td></tr>);
                } else {
                    tableData.push(<tr key={userAttribute}><td>{userAttribute}</td><td>{"Inactive"}</td></tr>);
                }

            } else if (userAttribute === "password") {
                continue;
            } else {
                tableData.push(<tr key={userAttribute}><td>{userAttribute}</td><td>{userData[userAttribute]}</td></tr>);
            }
        }

        return (
            <div id="home" >
                <fieldset>
                    <legend>Welcome to Profile!</legend>
                    <table>
                        <tbody>
                            {tableData}
                        </tbody>
                    </table>
                </fieldset >
            </div >
        )
    }
}

export default ProfilePage;
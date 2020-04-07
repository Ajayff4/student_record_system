import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/styles.css';
import axios from 'axios';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            dob: "",
            pincode: ""
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { mobile, dob, pincode } = this.state;
        axios.post('/updateProfile', { mobile: mobile, dob: dob, pincode: pincode, username: this.props.cookies.username }
        ).then(res => {
            //console.log(res.status);
            //alert("ok");
            this.props.history.push('/');
        }
        ).catch(err => console.error("post: ", err));
    }

    render() {
        return (
            <div className="formDiv" >
                <fieldset>
                    <legend>Update Profile Form</legend>
                    <form method="POST" onSubmit={this.onSubmit}>
                        <p id="notice">* Date field is for DOB</p><hr />
                        <input type="text" id="mobile" placeholder="Enter mobile number" name="mobile"
                            pattern="[0-9]{10}"
                            onChange={this.onChange} required /><br />
                        <input type="date" id="dob" placeholder="Enter date of birth" name="dob"
                            onChange={this.onChange} required /><br />
                        <input type="text" id="pincode" placeholder="Enter pincode" name="pincode"
                            pattern="[0-9]{6}"
                            onChange={this.onChange} required /><hr />
                        <button type="submit">Submit</button>
                    </form>
                </fieldset >
            </div >
        )
    }
}

export default withRouter(UpdateProfile);
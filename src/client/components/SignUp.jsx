import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/styles.css';
import axios from 'axios';
import sha256 from 'sha256';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      repassword: ""
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, email, password, repassword } = this.state;
    if (password === repassword) {
      axios.post('/signup', { fullname: fullname, username: username, email: email, password: sha256(password) }
      ).then(res => console.log(res.status)
      ).catch(err => console.error("post: ", err));
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="formDiv">
        <fieldset>
          <legend>Sign Up Form</legend>
          <form method='POST' onSubmit={this.onSubmit}>
            <input type="text" id="username"
              placeholder="Enter username"
              name="username" required
              value={this.state.username}
              onChange={this.onChange}
            /><br />
            <input type="text" id="fullname"
              placeholder="Enter fullname"
              name="fullname" required
              value={this.state.fullname}
              pattern="[A-Za-z .]"
              onChange={this.onChange}
            /><br />
            <input type="email" id="email"
              placeholder="Enter email"
              name="email" required
              value={this.state.email}
              onChange={this.onChange}
            /><br />
            <select name="course" id="course" required>
              <option value="">Select Course</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="MTech">M Tech</option>
            </select><br />
            <input type="password" id="password"
              placeholder="Enter password"
              name="password" required
              value={this.state.password}
              onChange={this.onChange}
            /><br />
            <input type="password" id="re-password"
              placeholder="Repeat password"
              name="repassword" required
              value={this.state.repassword}
              onChange={this.onChange}
            /><hr />
            <button type="submit">Sign Up</button>
          </form>
        </fieldset >
      </div >
    )
  }
}

export default withRouter(SignUp);
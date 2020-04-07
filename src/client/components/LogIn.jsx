import React, { Component } from 'react';
import '../styles/styles.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import sha256 from 'sha256';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		axios.post('/login', { username: username, password: sha256(password) },
			{ headers: { "Content-Type": "application/json" } }
		).then(res => {
			if (res.data.username !== undefined) {
				console.log(res.data.username);
				this.props.setCookie('username', username);
				this.props.history.push('/profile');
			} else {
				alert("Incorrect username/password");
			}
		}).catch(err => {
			console.error("post: ", err);
		});
	}

	render() {
		return (
			<div className="formDiv">
				<fieldset>
					<legend>Log In Form</legend>
					<form method='POST' onSubmit={this.onSubmit}>
						<input type="text" id="username" placeholder="Enter username" name="username"
							value={this.state.username} onChange={this.onChange} required
						/>
						<br />
						<input type="password" id="password" placeholder="Enter password" name="password"
							value={this.state.password} onChange={this.onChange} required
						/>
						<hr />
						<button type="submit">Submit</button>
					</form>
				</fieldset >
			</div >
		)
	}
}


export default withRouter(LogIn);
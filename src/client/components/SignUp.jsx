import React from 'react';
import '../styles/styles.css';

const SignUp = () => {
  return (
    <div className="formDiv">
      <fieldset>
        <legend>Sign Up Form</legend>
        <form>
          <input type="text" id="fullname"
            placeholder="Enter fullname"
            name="fullname" pattern="[A-Za-z]" required
          /><br />
          <input type="text" id="username"
            placeholder="Enter username"
            name="username" required
          /><br />
          <input type="email" id="email"
            placeholder="Enter email"
            name="email" required
          /><br />
          <input type="password" id="password"
            placeholder="Enter password"
            name="password" required
          /><br />
          <input type="password" id="re-password"
            placeholder="Repeat password"
            name="re-password" required
          /><hr />
          <button type="submit">Sign Up</button>
        </form>
      </fieldset >
    </div >
  )
}

export default SignUp;
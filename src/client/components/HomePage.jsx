import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import CurrentTime from './CurrentTime';
import CurrentDate from './CurrentDate';
import UpdateProfile from './UpdateProfile';
import SearchStudent from './SearchStudent';
import ProfilePage from './ProfilePage';
//import UpdateStudent from './UpdateStudent';


class HomePage extends Component {
    handleLogout = () => {
        this.props.removeCookie('username');
        console.log("logged out successfully.")
    }

    render() {
        return (
            <>
                <header>
                    <h2>HomePage</h2>
                    <CurrentDate />
                    <CurrentTime />
                </header>
                <center>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    {
                                        this.props.cookies.username !== undefined ?
                                            (<div>
                                                <li><Link to="/profile"><button>Profile</button></Link></li>
                                                <li><Link to="/updateProfile"><button>UpdateProfile</button></Link></li>
                                                <li><Link to="/searchStudent"><button>SearchStudent</button></Link></li>
                                                <li><button onClick={this.handleLogout}>LogOut</button></li>
                                                {/*TABS TO SHOW FOR LOGGED IN PEOPLE*/}
                                            </div>) :
                                            (<div>
                                                <li><Link to="/"><button>Home</button></Link></li>
                                                <li><Link to="/login"><button>Login</button></Link></li>
                                                <li><Link to="/signup"><button>Signup</button></Link></li>
                                                {/*TABS TO SHOW FOR NOT LOGGED IN PEOPLE*/}
                                            </div>)
                                    }
                                </ul>
                            </nav>

                            <Switch>
                                <Route exact path="/"><Home cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                                <Route path="/profile"><ProfilePage cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                                <Route path="/login"><LogIn cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                                <Route path="/signup"><SignUp cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                                <Route path="/updateProfile"><UpdateProfile cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                                <Route path="/searchStudent"><SearchStudent cookies={this.props.cookies} setCookie={this.props.setCookie} removeCookie={this.props.removeCookie} /></Route>
                            </Switch>
                        </div>
                    </Router>
                </center>

                <footer><h2>All Rights Reserved Copyright&copy;2020 {this.props.cookies.username !== undefined ? ("|| " + this.props.cookies.username) : null} </h2></footer>
            </>
        )
    }

}

export default HomePage;
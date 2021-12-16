import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Logout} from "./Logout";
import Search from "./Search";

function Navbar(props) {

    const history = useHistory();

    const onPress = () => {
        Logout();
        props.clearToken();
        history.push('/');
    }
    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <li><Link className="link" to="/">Home</Link></li>
                    <Search/>
                    {props.token ?
                        <>
                            <li><Link className="link" to="/add_pet"> + </Link></li>
                            <li><Link className="link" to="/profile/1">Profile</Link></li>
                            <li><button className="link" onClick={onPress}>Log out</button></li>
                        </>
                        :
                        <>
                            <li><Link className="link" to="/login">Log in</Link></li>
                            <li><Link className="link" to="/register">Register</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
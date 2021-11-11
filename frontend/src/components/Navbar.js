import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Logout} from "./Logout";

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
                    <li><Link to="/">Home</Link></li>
                    {props.token ?
                        <>
                            {/*<li><Link to="/profile/:id">Profile</Link></li>*/}
                            <li><a href="#" onClick={onPress}>Log out</a></li>
                        </>
                        :
                        <>
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
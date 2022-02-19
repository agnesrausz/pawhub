import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {Logout} from "./Logout";
import Search from "./Search";
import SearchNav from "./SearchNav";

function Navbar(props) {

    const history = useHistory();

    const onPressLogout = () => {
        Logout();
        props.clearToken();
        history.push('/');
    }
    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <li><Link className="link" to="/">Home</Link></li>
                    <SearchNav/>
                    {/*<Search setPets={props.setPets}/>*/}
                    {console.log(props.token)}
                    {console.log(localStorage.getItem('authToken'))}
                    {localStorage.getItem('authToken') ?
                        <>
                            <li><Link className="link" to="/add_pet"> + </Link></li>
                            <li><Link className="link" to={`/profile/${localStorage.getItem('userID')}`} >{localStorage.getItem('userName')}</Link></li>
                            <li><button className="link" onClick={onPressLogout}>Log out</button></li>
                        </>
                        :
                        <>
                            <li><Link className="link" to="/register">Register</Link></li>
                            <li><Link className="link" to="/login">Log in</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
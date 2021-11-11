import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {useState} from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState('');

    const setToken = (token) => {
        setIsAuthenticated(token)
    }

    const clearToken = () => {
        setIsAuthenticated('');
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar token={isAuthenticated} clearToken={clearToken}/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact render={(props) => (
                        <Login {...props} setToken={setToken} />
                    )}/>
                    <Route path='/register' exact render={(props) => (
                        <Register {...props} setToken={setToken} />
                    )}/>
                    {/*<Route path="/profile/:id" component={Profile}/>*/}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from "./components/PostList";
import SinglePost from "./components/SinglePost";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import {BsFillSunFill, BsMoonStarsFill} from "react-icons/bs";

const App = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkmode"))
    const [isChecked, setIsChecked] = useState();

    const changeTheme = (e) => {
        setDarkMode(e.target.checked)
    }

    useEffect(() => {
        if (darkMode && darkMode !== 'false') {
            document.body.style.backgroundColor = "#292c35";
            setIsChecked(true);
        } else {
            document.body.style.backgroundColor = "#fff";
            setIsChecked(false);
        }
        localStorage.setItem("darkmode", darkMode);
        }, [darkMode])

    return (
        <Provider store={store}>
            <div className="container">
                <div className="row" style={{marginTop: 50 + 'px'}}>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div id='darkmode' className={darkMode && darkMode !== 'false' ? 'darkmode' : 'notDark'}>
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="checkbox"
                                onChange={changeTheme}
                                checked={isChecked}
                            />
                            <label htmlFor="checkbox" className="label">
                                <BsFillSunFill color="yellow"/>
                                <BsMoonStarsFill color="white"/>
                                <div className="ball"></div>
                            </label>

                            <Router>
                                <Switch>
                                    <Route exact path="/" component={PostList}/>
                                    <Route exact path="/posts/:id" component={SinglePost}/>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </Provider>
    );
}

export default App;

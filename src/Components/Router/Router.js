import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import styles from "./Router.css"

import About from "../About";
import Blog from "../Blog";
import Contact from "../Contact";
import Resume from "../Resume";

const RouterMain = () => {
    return (
        <Router>
            <div className="App" >
                    <div className="nav-bar" >
                        <Link 
                            to="/about"
                        >
                            About
                        </Link>
                        <Link className={styles.menu}
                            to="/contact"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/resume"
                        >
                            Resume
                        </Link>
                        <Link
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="inline-display">
                    <header className="App-header">
                        <h1>Shivendu Amale</h1>
                        <p className="para">
                            <code>Software Developer</code>
                        </p>
                    </header>

                
                <Switch>
                    <Route path="/about">
                        <About style={{Color:'blue'}}/>
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    )
}

export default RouterMain;
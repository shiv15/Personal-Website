import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import About from "../About";
import Blog from "../Blog";
import Contact from "../Contact";
import Resume from "../Resume";
import Projects from "../Projects";

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
                        <Link
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
                        <Link
                            to="/projects"
                        >
                            Projects
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
                        <About />
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
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    )
}

export default RouterMain;
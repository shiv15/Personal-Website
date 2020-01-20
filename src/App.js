import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './name_logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Shivendu Amale</h1>
          <p className="para">
            <code>Software Developer</code>
          </p>
        </header>
        <div className="nav-bar">
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
        </div>
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
        </Switch>
      </div>
    </Router>
  );

}

function About() {
  return (
    <div className="About">
      <h2>About</h2>
      <p>
        Hello, 👋🏾 I am Shivendu Amale. I am studying my masters in computer science at California State University, Dominguez Hills. <br />I have one year of experience in MERN stack. Currntly interested in Data Science along with Software Engineering.
    </p>
    </div>
  )
}

function Contact() {
  return (
    <div className="contacts">
      <h2>Contact</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/shivendu-amale/">LinkedIn</a></li>
        <li><a href="https://github.com/shiv15">Github</a></li>
        <li><a href="https://twitter.com/88shivendu88">Twitter</a></li>
        <li>Email: <a href="mailto:shivendu.amale@gmail.com">shivendu.amale@gmail.com</a></li>
      </ul>
    </div>
  )
}

function Resume() {
  return (
    <div className="Resume">
      <h2><a href="https://firebasestorage.googleapis.com/v0/b/personal-website-165ab.appspot.com/o/Shivendu-Resume.pdf?alt=media">Download Resume</a></h2>
    </div>
  )
}

function Blog() {
  return (
    <div className="Blog">
      <h2>Coming Soon</h2>
    </div>
  )
}




export default App;

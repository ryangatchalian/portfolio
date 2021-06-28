import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Ryan Anthony Gatchalin',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Github', path: 'https://github.com/ryangatchalian' },
      ],
      home: {
        subTitle: 'Thanks for stopping by! ',
        text: 'Check out some of my projects below:'
      },
      about: {
        subTitle: 'More about me...'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <h1 className="navbar-brand">
              <span style={{ color: "#235789" }}>Ryan Anthony</span> Gatchalian
            </h1>
            <a
              className="inline-block ml-1 text-3xl"
              href="https://github.com/ryangatchalian/"
              >
              <AiFillGithub />
            </a>
            <a
              className="inline-block ml-2 text-3xl"
              href="https://www.linkedin.com/in/ryan-anthony-gatchalian/"
              >
              <AiFillLinkedin />
            </a>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage subTitle={this.state.about.subTitle} />} />

        </Container>
      </Router>
      );
  }
}

export default App;

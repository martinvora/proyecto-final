import React, { Component } from 'react';
import './app.css';
import Podcast from './components/podcast';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import fire from './components/fire';
import notify from './components/toastify.jsx';
import Home from './components/home';
import ScrollToTop from './components/scrollToTop';




class App extends Component {




  pushAndNotify = (e) => {
    e.preventDefault();
    notify(e);
    this.handleSubmit(e);



  }


  state = {
    text: ""
  }


  handleText = e => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = e => {


    fire.database().ref('Emails').push(this.state.text);
    this.setState({
      text: ""
    });

  }




  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <Link to="/" onClick={ScrollToTop} >
                <img src="Images/noheader.png" alt="Logo Novi Orbis"
                /></Link>
              <h1 id="nav-tittle" >NOVI ORBIS</h1>
              <ul className="nav-grid">
                <li>
                  <Link to="/" className="btn-nav" onClick={ScrollToTop} > home </Link>
                </li>
                <li > 
                  <Link to="/podcast" className="btn-nav" onClick={ScrollToTop}  > podcast </Link> </li>
              </ul>
              <a href="https://www.facebook.com/noviorbisrec/">
                <img
                  className="social-icon"
                  src="Images/social-icons/fb.png"
                  alt="Link to facebook"
                />
              </a>
              <a href="https://www.instagram.com/novi.orbis/">
                <img
                  className="social-icon"
                  src="Images/social-icons/ig.png"
                  alt="Link to instagram"
                />
              </a>
              <a href="https://soundcloud.com/novi_orbis">
                <img
                  className="social-icon"
                  src="Images/social-icons/sc.png"
                  alt="Link to soundcloud"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCQo0r3pl1yaFZ6rMfaP12Qw">
                <img
                  className="social-icon"
                  src="Images/social-icons/youtube.png"
                  alt="Link to youtube"
                />
              </a>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path='/podcast'>
              <Podcast/>
            </Route>
          </Switch>
          <footer>
            <div>
              <label htmlFor="Email" >
                SIGN UP FOR OUR NEWSLETTER AND GET FREE TRACKS!!!&nbsp;&nbsp;
          </label>
              <input
                placeholder="Enter Your email"
                type="mail"
                onChange={this.handleText}
                name="Email"
                id="inputText"
                className="form-control"
                value={this.state.text}
              />
              <button onClick={this.pushAndNotify}

                id="submit" className="button-submit" > SUBMIT</button>
            </div>
          </footer>


        </div>
      </Router>
    );
  }
}

export default App;

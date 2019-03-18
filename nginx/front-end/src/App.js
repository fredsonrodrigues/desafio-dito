import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Timeline, Home, AutocompleteComponent } from "./Pages";

class App extends Component {
  render() {
    return (
      <Router>
        <section className="hero is-info is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <h1>
                      <strong>Desafio Dito</strong>
                    </h1>
                  </Link>
                  <span className="navbar-burger burger is-active" data-target="navbarMenuHeroA">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                <div id="navbarMenuHeroA" className="navbar-menu is-active">
                    <div className="navbar-end">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/timeline/">Timeline</Link>
                    <Link className="navbar-item" to="/autocomplete/">Autocomplete</Link>
                    </div>
                  </div>
                </div>
            </nav>
          </div>
          <div className="hero-body">
            <Route exact path="/" component={Home} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/autocomplete/" component={AutocompleteComponent} />
          </div>
        </section>
    </Router>
    );
  }
}

export default App;
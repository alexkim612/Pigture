import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from './landing-page.jsx';
import FrontPig from './front-pig.jsx';
import SidePig from './side-pig.jsx';
import Results from './results.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pigHeartGirth: 0,
      pigLength: 0,
      weight: 0,
    }

    this.nextPage = this.nextPage.bind(this);
    this.setLength = this.setLength.bind(this);
    this.setWeight = this.setWeight.bind(this);
    this.setHeartGirth = this.setHeartGirth.bind(this);
  }



  // Set Heart Girth
  setHeartGirth(value) {
    this.setState({
      pigHeartGirth: value,
    });
  }

  // Set Length
  setLength(value) {
    this.setState({
      pigLength: value,
    });
  }

  // Set Weight
  setWeight() {
    let weight = ((Math.pow(this.state.pigHeartGirth, 2) * this.state.pigLength) / 400);
    this.setState({
      weight: weight,
    });
  }

  // Next page 
  nextPage() {
    let nextPage;
    if (nextPage > 3) {
      nextPage = 0;
    } else {
      nextPage = this.state.page += 1;
    }
    this.setState({
      page: nextPage,
    });
  }


  render() {
    return (
      <Router>
        <div>
          <ul className="nav-bar">
            <li className="home-nav">
              <Link to="/">Home</Link>
            </li>
            <li className="front-pig-nav">
              <Link to="/front-pig">Pig Heart Girth</Link>
            </li>
            <li className="side-pig-nav">
              <Link to="/side-pig">Pig Length</Link>
            </li>
            <li className="results-nav">
              <Link to="results">Results</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/front-pig">
              <FrontPig />
            </Route>
            <Route path="/side-pig">
              <SidePig />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App;
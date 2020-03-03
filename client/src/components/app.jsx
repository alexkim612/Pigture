import React from 'react';
import ReactDOM from 'react-dom';

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
      page: 1,
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
    if(nextPage > 3) {
      nextPage = 0;
    } else {
      nextPage = this.state.page += 1;
    }
    this.setState({
      page: nextPage,
    });
  }


  render() {

    let page = () => {
      if(this.state.page === 0) {
        return <LandingPage nextPage={this.nextPage}/>;
      } else if (this.state.page === 1) {
        return <FrontPig nextPage={this.nextPage} setHeartGirth={this.setHeartGirth}/>;
      } else if (this.state.page === 2) {
        return <SidePig nextPage={this.nextPage} setLength={this.setLength} setWeight={this.setWeight}/>;
      } else {

        return <Results nextPage={this.nextPage} weight={this.state.weight}/>;
      }
    }

    return (
      <div className="app-container">
        {page()}
      </div>
    )
  }

}

export default App;
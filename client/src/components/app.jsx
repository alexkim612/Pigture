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
      page: 0,
    }

  }

  // Next page 

  // 

  render() {
    return (
      <div className="app-container">
        PIGTURE
        <LandingPage/>
        <FrontPig/>
        <SidePig/>
        <Results/>
      </div>
    )
  }

}

export default App;
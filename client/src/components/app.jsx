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

    this.nextPage = this.nextPage.bind(this);
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

  // 

  render() {
    let page = () => {
      if(this.state.page === 0) {
        return <LandingPage/>;
      } else if (this.state.page === 1) {
        return <FrontPig/>;
      } else if (this.state.page === 2) {
        return <SidePig/>;
      } else {
        return <Results/>;
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
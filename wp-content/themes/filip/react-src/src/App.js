import React from 'react';
import './App.scss';

import Header from './containers/shared/Header';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
          <div className="section no-pad-bot" id="index-banner">
              <div className="container">
                      <h1 className="header center orange-text">Starter Template</h1>
                      <div className="row center">
                          <h5 className="header col s12 light">A modern responsive front-end framework based on Material
                              Design</h5>
                      </div>
                      <div className="row center">
                          <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
                      </div>

              </div>
          </div>

      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInitMenuData, fetchInitHomeData } from './actions/init'

import Header from './containers/shared/Header';
import Home from './containers/Home/Home'
import HomeHero from './components/Home/HomeHero'

class App extends React.Component {

  componentDidMount = () => {
      const { props: { fetchInitMenuData, fetchInitHomeData } } = this;
      fetchInitMenuData();
      fetchInitHomeData();
  };

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
              <Header/>
                <Switch>
                    <Route path="/home" component={HomeHero} />
                    <Route exact path="/"  component={Home} />
                    <Redirect to="/" />
                </Switch>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
    fetchInitMenuData,
    fetchInitHomeData
})(App);

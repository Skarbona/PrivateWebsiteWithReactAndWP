import React from 'react';
import './App.scss';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    fetchInitMenuData,
    fetchInitHomeData,
    fetchInitHomeElementsData
} from './actions/init'

import Header from './containers/shared/Header';
import Home from './components/Home/Home'

class App extends React.Component {

  componentDidMount = () => {
      const { props: {
          fetchInitMenuData,
          fetchInitHomeData,
          fetchInitHomeElementsData,
      } } = this;
      fetchInitMenuData();
      fetchInitHomeData();
      fetchInitHomeElementsData();
  };

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
              <Header/>
                <Switch>
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
    fetchInitHomeData,
    fetchInitHomeElementsData
})(App);

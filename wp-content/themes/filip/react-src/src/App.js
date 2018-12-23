import React from 'react';
import './App.scss';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllInitData } from './actions/init'

import Header from './containers/shared/Header';
import Home from './components/Home/Home'
import Bullitt from './components/Home/HomePosts/HomePosts'

class App extends React.Component {

  componentDidMount = () => {
      const { props: { fetchAllInitData } } = this;
      fetchAllInitData();
  };

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
              <Header/>
                <Switch>
                    <Route exact path="/"  component={Home} />
                    <Route exact path="/bullitt" component={() => <Bullitt typeOfPage="bullitt" />} />
                    <Redirect to="/" />
                </Switch>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
    fetchAllInitData
})(App);

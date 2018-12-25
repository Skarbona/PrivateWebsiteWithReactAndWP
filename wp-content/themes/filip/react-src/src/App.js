import React from 'react';
import './App.scss';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllInitData } from './actions/init'

import Header from './containers/shared/Header';
import Home from './components/Home/Home'
import Bullitt from './components/Home/HomePosts/HomePosts'

class App extends React.Component {

  constructor(props) {
     super(props);
      this.contact = React.createRef();
      this.home = React.createRef();
      this.tools = React.createRef();
      this.gallery = React.createRef();
      this.portfolio = React.createRef();
  }

  componentDidMount = () => {
      const { props: { fetchAllInitData } } = this;
      fetchAllInitData();
  };

  render() {
      const { home, tools, portfolio, gallery, contact } = this;
    return (
      <BrowserRouter>
          <React.Fragment>
              <Header refHome={home}
                      refTools={tools}
                      refPortfolio={portfolio}
                      refGallery={gallery}
                      refContact={contact} />
                <Switch>
                    <Route exact path="/"  component={() => { return <Home refHome={home}
                                                                           refTools={tools}
                                                                           refPortfolio={portfolio}
                                                                           refGallery={gallery}
                                                                           refContact={contact} /> } } />
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

/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import OrbitsPage from "./containers/OrbitsPage";
import NotFoundPage from "./NotFoundPage";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";


class App extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="container-fluid">
        {/*<header>*/}
          {/*<NavLink exact to="/" activeStyle={activeStyle}>Orbits</NavLink>*/}
          {/*{' | '}*/}
        {/*</header>*/}
        <Switch>
          <Route exact path="/"  component={OrbitsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);

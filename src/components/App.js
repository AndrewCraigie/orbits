/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import OrbitsPage from "./containers/OrbitsPage";
import NotFoundPage from "./NotFoundPage";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";


class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Orbits</NavLink>
          {' | '}
        </div>
        <Switch>
          <Route exact path="/" component={OrbitsPage} />
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

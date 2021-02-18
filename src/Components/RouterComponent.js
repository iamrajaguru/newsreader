import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Containers/Home";
import DetailedNews from "../Containers/DetailedNews";
export class RouteComponent extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/news" exact={true} component={DetailedNews} />
      </Switch>
    );
  }
}

export default RouteComponent;

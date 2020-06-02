import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/home";
import Layout from "./hoc/Layout/layout";
import MenuHome from './components/Home/Body/Menu/menu-home'
import MainMenu from './components/Home/Body/Menu/MenuMain/MainMenu'

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" exact component={ MenuHome } />
          <Route path="/MainMenu" exact component={ MainMenu } />
          
          {/* <Route path="/articles/:id" /> */}
        </Switch>
      </Layout>
    );
  }
}

export default Routes;

import React from "react";
import Navbar from "./shoppingCart/Navbar";
import MainMenuHome from "./shoppingCart/Home";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//REDUX
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./shoppingCart/Cart";

const App = ()=> {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route path="/MainMenu-Order-Online" exact component={MainMenuHome} />
          <Route path="/Cart" exact component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

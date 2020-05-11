import React from "react";
import Home from "./Layout/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layout/Header/Header";
import About from "./pages/AboutUs/About";
import Help from "./pages/Help/Help";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <About />
          </Route>

          <Route path="/help">
            <Help />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

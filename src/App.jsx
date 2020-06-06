import React from "react";
import Home from "./Layout/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layout/Header/Header";
import About from "./pages/AboutUs/About";
import Help from "./pages/Help/Help";
import Product from "./components/Product/Product";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Admin from "./admin/Admin";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/cart" component={Product}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/product/:id"
            name="products"
            component={Product}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

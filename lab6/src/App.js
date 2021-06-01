import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ContextProvider from "./contexts/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Pizzeria PIWa";
  });

  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/register" />
            <Route path="/login" component={() => <Login />} />
            <Route path="/" component={() => <Home />} />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;

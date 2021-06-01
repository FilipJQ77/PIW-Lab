import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import ContextProvider from "./contexts/Context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.title = "Pizzeria PIWa";
  });

  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={() => <Home />} />
            <Route path="/register" /> {/* component register */}
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;

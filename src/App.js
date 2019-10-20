import React from "react";
import "./App.css";
import {Switch, Route} from "react-router-dom"
import MainPage from "./pages/"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component= {MainPage} />
      </Switch>
    </div>
  );
}

export default App;

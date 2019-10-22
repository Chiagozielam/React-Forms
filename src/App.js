import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;

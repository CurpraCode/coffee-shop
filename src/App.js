import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import reducer, { initialState } from "./Reducer";
import { StateProvider } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;

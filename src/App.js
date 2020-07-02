import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/:id" children={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

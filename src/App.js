import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import StateProject from "./context/projects/stateProject";
import StateTask from "./context/tasks/stateTask";

function App() {
  return (
    <StateProject>
      <StateTask>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </StateTask>
    </StateProject>
  );
}

export default App;

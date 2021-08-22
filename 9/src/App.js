import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from './rotues'

export default function App() {
  return (
    <Router>
      <Switch>
        {
          routes.map(({path, component})=>{
            return(
              <Route path={path} exact>
                {component}
              </Route>
            )
          })
        }
      </Switch>
    </Router>
  )
}
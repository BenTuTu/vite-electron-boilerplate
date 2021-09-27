import React from "react";
import ReactDom from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import App from "./App";
import About from "./About";

function Root() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/" exact component={App} />
          <Redirect from="" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDom.render(<Root />, document.getElementById("root"));

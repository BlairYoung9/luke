import React from "react";
import People from './Components/People';
import Form from './Components/Form';
import Planets from './Components/Planets';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <h1 style={{ color: "red" }}>Home Component</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/"> Home  </Link>
        <Link to="/form">  Form </Link>
      </p>
      <Switch>
        <Route path="/people/:id">
          <People/>
        </Route>
        <Route path="/planets/:id">
          <Planets/>
        </Route>
        <Route exact path="/form">
          <Form/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

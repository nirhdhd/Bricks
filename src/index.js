import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/home.jsx';
import CreateWorksheet from './components/createWorksheet/createWorkheet.jsx'
import { StylesProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
}

function App() {
  usePageViews();
  return <Switch>


    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/createWorksheet">
      <CreateWorksheet />
    </Route>

    <Route exact path="/home">
      <Home />
    </Route>

    <Route exact path="/login">
      <Login />
    </Route>

    <Route exact path="/register">
      <Register />
    </Route>





  </Switch>;
}


ReactDOM.render(
  <React.StrictMode >
    <Router>
      <StylesProvider injectFirst>// react material-UI מאפשר דריסה ש הצבעים והתכנות הדיפולטיביות של ה 
        <App />
      </StylesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Landing from './Landing.js'
import MyRecipes from './MyRecipes';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <>
    <Auth0Provider
      domain="dev-kutmer1h.us.auth0.com"
      clientId="vM7UDo8aCXhISSNStLn5isSkRpxWlbDB"
      // redirectUri="https://tacobout.herokuapp.com/"
      redirectUri="http://localhost:3000"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/app">
            <App />
          </Route>
          <Route exact path="/myrecipes">
            <MyRecipes />
          </Route>
        </Switch>
      </Router>
    </Auth0Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

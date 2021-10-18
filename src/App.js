
import React, { lazy, Suspense } from "react";
import { hot } from 'react-hot-loader/root';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";

const App = (props) =>{
    const { name } = props;
    return (
      <Router>
        <Suspense>
          <Header />
          {/* put your routes here */}
        </Suspense>
      </Router>
    );
}

export default hot(App);

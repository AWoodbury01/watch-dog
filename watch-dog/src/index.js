import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WatchDog from '../src/Components/WatchDog';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import "../src/Components/profile/Profile.css"


ReactDOM.render(
  <Router>
    <WatchDog />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

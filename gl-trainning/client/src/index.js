import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import glTheme from "./theme/gl-theme/Theme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
  <MuiThemeProvider theme={glTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

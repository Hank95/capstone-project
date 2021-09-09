import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ProvideAuth } from "./util/use-auth";
require("dotenv").config();

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  a { 
    color:black; 
    text-decoration: none;

    }

  select{
    border: none;
    margin-left: 5px;
    /* appearance: none; */
    /* outline: none; */
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

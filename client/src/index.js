import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery,gql } from '@apollo/client';

import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//const client = new ApolloClient({
// uri: 'https://48p1r2roz4.sse.codesandbox.io',
//cache: new InMemoryCache()
//});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

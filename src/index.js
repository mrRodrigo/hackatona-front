import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { Store } from "./Store";
import Login from "./Pages/Login";
import GerenciarEquipe from "./Pages/GerenciarEquipe";
import ListarEquipes from "./Pages/ListarEquipes";
import Avaliar from "./Pages/Avaliar";
import Nota from "./Pages/Notas";

import GlobalStyle, { MainContainer } from "./globalStyle";

ReactDOM.render(
  <Provider store={Store}>
    <MainContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/listarEquipes" exact component={ListarEquipes} />
          <Route path="/minhaEquipe" exact component={GerenciarEquipe} />
          <Route path="/avaliar" exact component={Avaliar} />
          <Route path="/notas" exact component={Nota} />
        </Switch>
      </BrowserRouter>
    </MainContainer>
  </Provider>,
  document.getElementById("root")
);

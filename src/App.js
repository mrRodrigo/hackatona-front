import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import GlobalStyle, { MainContainer } from "./globalStyle";

import MainProfessor from "./Pages/MainProfessor";
import MainAluno from "./Pages/MainAluno";
import Login from "./Pages/Login";

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <MainContainer>
        <GlobalStyle />
        {currentUser ? (
          currentUser.isProfessor ? (
            <MainProfessor />
          ) : (
            <MainAluno />
          )
        ) : (
          <Login />
        )}
      </MainContainer>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userReducer.currentUser
});

export default withRouter(connect(mapStateToProps)(App));

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { login } from "../../Actions";

import { Container, LoginFormContainer, LabelInput } from "./styles";
import { Button, Input } from "../../globalStyle";

import api from "../../Service/api";

class Login extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logIn = async () => {
    const { login, history } = this.props;
    const { matricula } = this.state;

    const response = await api.get(`/aluno/usuarios?matricula=${matricula}`);

    if (response.data.length > 0) {
      await login(response.data[0]);

      history.push("/");
    } else {
      console.log("Matricula não existente");
    }
  };

  render() {
    console.log(login);
    return (
      <Container>
        <LoginFormContainer>
          <LabelInput> Diga sua matricula </LabelInput>
          <Input onChange={this.onChange} name="matricula"></Input>
          <Button onClick={this.logIn}>ENTRAR</Button>
        </LoginFormContainer>
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userReducer.currentUser
});

// map global action to props fos this component
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

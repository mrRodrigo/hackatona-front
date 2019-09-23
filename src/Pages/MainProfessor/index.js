import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../../globalStyle";

class MainProfessor extends Component {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Button height={"70px"} onClick={() => history.push("/listarEquipes")}>
          AVALIAR
        </Button>
        <Button height={"70px"} onClick={() => history.push("/login")}>
          LOGOUT
        </Button>
      </Container>
    );
  }
}
export default withRouter(MainProfessor);

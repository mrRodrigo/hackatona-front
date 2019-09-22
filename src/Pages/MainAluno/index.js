import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "../../globalStyle";

class MainAluno extends Component {
  render() {
    const { history } = this.props;
    return (
      <Container>
        <Button height={"70px"} onClick={() => history.push("/minhaEquipe")}>
          MINHA EQUIPE
        </Button>
        <Button height={"70px"} onClick={() => history.push("/listarEquipes")}>
          VER EQUIPES
        </Button>
      </Container>
    );
  }
}

export default withRouter(MainAluno);

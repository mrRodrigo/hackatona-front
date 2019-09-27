import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, ContainerNota } from "./styles.js";
import { Title } from "../GerenciarEquipe/styles.js";
import { LabelInput } from "../Login/styles.js";
import { Button } from "../../globalStyle.js";

class Notas extends Component {
  render() {
    const { history } = this.props;
    const { data } = this.props.location;
    console.log(data);
    return (
      <Container>
        <ContainerNota>
          <Title>{data ? data.nome : "Equipe"}</Title>

          {data.nota ? (
            <React.Fragment>
              <LabelInput>PROCESSO : {data.nota.processo}</LabelInput>
              <LabelInput>TIME : {data.nota.time}</LabelInput>
              <LabelInput>INOVAÇÂO : {data.nota.inovacao}</LabelInput>
              <LabelInput>PITCH : {data.nota.pitch}</LabelInput>
              <LabelInput>FUNCIONAMENTO : {data.nota.funcionamento}</LabelInput>
            </React.Fragment>
          ) : (
            <LabelInput>SEM AVALIAÇÃO POR ENQUANTO</LabelInput>
          )}
        </ContainerNota>
        <Button width={"40px"} onClick={() => history.push("/listarEquipes")}>
          ←
        </Button>
      </Container>
    );
  }
}

export default withRouter(Notas);

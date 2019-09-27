import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, LabelInput, Input } from "./styles";
import { Button } from "../../globalStyle";
import api from "../../Service/api";

class Avaliar extends Component {
  constructor(props) {
    super(props);

    this.send = this.send.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  }

  async send(data, history) {
    console.log(this.state);
    const nota = {
      ...this.state,
      team: data.id,
      teamId: data.id
    };
    await api.post(`/time/avaliar/${data.id}`, nota);
    history.push("/");
  }
  render() {
    const { data } = this.props.location;
    const { history } = this.props;
    return (
      <Container>
        <LabelInput>FUNCIONAMENTO</LabelInput>
        <Input name="funcionamento" onChange={this.onChange}></Input>

        <LabelInput>PROCESSO</LabelInput>
        <Input name="processo" onChange={this.onChange}></Input>

        <LabelInput>PITCH</LabelInput>
        <Input name="pitch" onChange={this.onChange}></Input>

        <LabelInput>INOVAÇÂO</LabelInput>
        <Input name="inovacao" onChange={this.onChange}></Input>

        <LabelInput>TIME</LabelInput>
        <Input name="time" onChange={this.onChange}></Input>

        <br />
        <br />

        <Button
          width={"300px"}
          height={"40px"}
          onClick={() => this.send(data, history)}
        >
          ENVIAR AVALIAÇÃO
        </Button>
      </Container>
    );
  }
}
export default withRouter(Avaliar);

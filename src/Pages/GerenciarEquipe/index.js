import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import "./theme.css";
import {
  Title,
  Container,
  Text,
  TeamNameContainer,
  TeamNameInput
} from "./styles";

import {
  CardContainer,
  Table,
  TableHead,
  TableHeadData,
  TableDataID,
  Tr,
  TableData,
  Input,
  Button
} from "../../globalStyle";

const students = [
  { id: 0, nome: "harua", curso: "ES" },
  { id: 1, nome: "harub", curso: "CC" },
  { id: 2, nome: "haruc", curso: "SI" }
];

export default class GerenciarEquipe extends Component {
  constructor(props) {
    super(props);
    this.saveTeamName = this.saveTeamName.bind(this);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.enableSaveTeamNameButton = this.enableSaveTeamNameButton.bind(this);
    this.disableSaveTeamNameButton = this.disableSaveTeamNameButton.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  state = {
    tmpTeamName: "",
    hiddenSaveTeamNameButton: true,
    students: [],
    myTeam: {
      participants: [],
      name: null
    },
    value: "",
    studentToAdd: {}
  };

  componentDidMount() {
    const myTeam = {
      name: "My Team",
      participants: [
        { nome: "Joâo Mathias", curso: "ES" },
        { nome: "Jorge antonio", curso: "ES" },
        { nome: "Joâo Mathias", curso: "ES" },
        { nome: "Joâo Mathias", curso: "ES" },
        { nome: "Joâo Mathias", curso: "ES" }
      ]
    };
    this.setState({ myTeam });
  }

  sendTeam() {
    const team = {};
    console.log();
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : students.filter(
          student =>
            student.nome.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = student => student.nome;

  renderSuggestion = student => (
    <div
      style={{ backgroundColor: "#fff" }}
      onClick={() => {
        this.setState({
          studentToAdd: students.filter(s => s.id === student.id)[0]
        });
      }}
    >{`${student.nome} - ${student.curso}`}</div>
  );

  onChangeStudentDropDown = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  remove(i) {
    let myTeam = this.state.myTeam;
    myTeam.participants.splice(i, 1);
    this.setState({ myTeam });
  }

  saveTeamName() {
    var myTeam = this.state.myTeam;
    myTeam.name = this.state.tmpTeamName;
    this.setState({ myTeam });
    this.disableSaveTeamNameButton();
  }

  onChangeTeamName(e) {
    let name = e.target.value;
    let tmpTeamName = this.state.tmpTeamName;
    tmpTeamName = name;
    this.setState({ tmpTeamName });
  }

  enableSaveTeamNameButton() {
    this.setState({ hiddenSaveTeamNameButton: false });
  }

  disableSaveTeamNameButton() {
    this.setState({ hiddenSaveTeamNameButton: true });
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      students: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      students: []
    });
  };

  addStudent() {
    let myTeam = this.state.myTeam;
    myTeam.participants.push(this.state.studentToAdd);
    this.setState({ myTeam });
    console.log(myTeam.participants);
  }
  render() {
    const { myTeam, hiddenSaveTeamNameButton, students, value } = this.state;
    const reamaningTeamate = 5 - myTeam.participants.length;

    const inputProps = {
      placeholder: "Entre com o nome de um aluno",
      onChange: this.onChangeStudentDropDown,
      value
    };

    return (
      <CardContainer>
        <Container>
          <Title>MINHA EQUIPE</Title>

          <hr style={{ marginBottom: "10px" }} />

          <TeamNameContainer>
            <TeamNameInput
              placeholder={myTeam.name || "ADICIONE UM NOME AQUI"}
              onChange={this.onChangeTeamName}
              onFocus={this.enableSaveTeamNameButton}
            />
            <Button
              height={"25px"}
              width={"60px"}
              onClick={this.saveTeamName}
              hidden={hiddenSaveTeamNameButton}
            >
              SALVAR
            </Button>
          </TeamNameContainer>

          <Table>
            <TableHead>INTEGRANTES</TableHead>
            <tbody>
              <Tr>
                <TableHeadData>#</TableHeadData>
                <TableHeadData>NOME</TableHeadData>
                <TableHeadData>CURSO</TableHeadData>
                <TableHeadData></TableHeadData>
              </Tr>
              {myTeam.participants.map((user, i) => (
                <Tr key={i}>
                  <TableDataID>{i}</TableDataID>
                  <TableData>{user.nome}</TableData>
                  <TableData>{user.curso}</TableData>
                  <TableData>
                    <Button width={"100px"} onClick={() => this.remove(i)}>
                      REMOVER
                    </Button>
                  </TableData>
                </Tr>
              ))}
            </tbody>
          </Table>
          <Text>{`Você ainda pode adicionar ${reamaningTeamate} participantes neste time.`}</Text>
        </Container>
        <Text>ADICIONAR INTEGRANTE</Text>
        <Button
          disabled={!reamaningTeamate > 0}
          height={"50px"}
          onClick={this.addStudent}
        >
          ADICIONAR
        </Button>
        <Autosuggest
          suggestions={students}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </CardContainer>
    );
  }
}

import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import api from "../../Service/api";

import "./theme.css";
import {
  Title,
  Container,
  Text,
  TeamNameContainer,
  TeamNameInput,
  HeaderContainer
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

var students = [];

class GerenciarEquipe extends Component {
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
      alunos: [],
      nome: null
    },
    value: "",
    studentToAdd: {}
  };

  async componentDidMount() {
    const { currentUser } = this.props;

    const response = await api.get("/aluno/usuarios");
    const team = await api.post("/time/timeByAlunos", [currentUser.matricula]);

    students = response.data;

    if (team.data.length > 0)
      this.setState({ myTeam: team.data[team.data.length - 1] });
  }

  sendTeam = async () => {
    const { alunos, nome, id } = this.state.myTeam;

    const team = {
      nome,
      alunos: alunos
    };
    let url = "";

    if (nome) {
      id != null ? (url = `/time/${id}`) : (url = "/time");
      api
        .post(url, team)
        .then(response => {
          alert("Alterações foram salvas! ");
        })
        .catch(error => {
          alert("Deve haver alunos de pelo menos dois cursos diferentes! ");
        });
    } else {
      alert("Sua equipe precisa de um nome! ");
    }
  };

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
          studentToAdd: students.filter(s => s.nome === student.nome)[0]
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
    myTeam.alunos.splice(i, 1);
    this.setState({ myTeam });
  }

  saveTeamName() {
    var myTeam = this.state.myTeam;
    myTeam.nome = this.state.tmpTeamName;
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
    myTeam.alunos.push(this.state.studentToAdd);
    this.setState({ myTeam });
    console.log(myTeam.alunos);
  }
  render() {
    const { myTeam, hiddenSaveTeamNameButton, students, value } = this.state;
    const reamaningTeamate = 5 - myTeam.alunos.length;

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

          <HeaderContainer>
            <TeamNameContainer>
              <TeamNameInput
                placeholder={myTeam.nome || "ADICIONE UM NOME AQUI"}
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
            <Button height={"70px"} width={"200px"} onClick={this.sendTeam}>
              SALVAR TIME
            </Button>
          </HeaderContainer>

          <Table>
            <TableHead>INTEGRANTES</TableHead>

            <tbody>
              <Tr>
                <TableHeadData>MATRÍCULA</TableHeadData>
                <TableHeadData>NOME</TableHeadData>
                <TableHeadData>CURSO</TableHeadData>
                <TableHeadData></TableHeadData>
              </Tr>
              {myTeam.alunos.map((user, i) => (
                <Tr key={i}>
                  <TableDataID>{user.matricula}</TableDataID>
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
const mapStateToProps = store => ({
  currentUser: store.userReducer.currentUser
});

export default connect(mapStateToProps)(GerenciarEquipe);

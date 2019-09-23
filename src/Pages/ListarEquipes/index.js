import React, { Component } from "react";

import { Title, Container } from "../GerenciarEquipe/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import api from "../../Service/api";

import {
  CardContainer,
  Table,
  TableHeadData,
  TableDataID,
  Tr,
  TableData,
  Button
} from "../../globalStyle";

class ListarEquipes extends Component {
  state = {
    teams: [{ id: 1, nome: "teste" }]
  };

  async componentDidMount() {
    const teams = await api.get("/time");
    console.log(teams);
    this.setState({ teams: teams.data });
  }
  render() {
    const { teams } = this.state;
    const { currentUser, history } = this.props;
    return (
      <CardContainer>
        <Container>
          <Title>EQUIPES</Title>

          <hr style={{ marginBottom: "10px" }} />

          <Table>
            <tbody>
              <Tr>
                <TableHeadData>#</TableHeadData>
                <TableHeadData>NOME</TableHeadData>
                {currentUser.isProfessor && <TableHeadData></TableHeadData>}
              </Tr>
              {teams.map((t, i) => (
                <Tr key={i}>
                  <TableDataID>{i}</TableDataID>
                  <TableData>{t.nome}</TableData>
                  {!currentUser.isAluno && (
                    <TableData>
                      <Button
                        onClick={() => {
                          history.push({
                            pathname: `/avaliar`,
                            data: t
                          });
                        }}
                      >
                        AVALIAR
                      </Button>
                    </TableData>
                  )}
                </Tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </CardContainer>
    );
  }
}
const mapStateToProps = store => ({
  currentUser: store.userReducer.currentUser
});
export default withRouter(connect(mapStateToProps)(ListarEquipes));

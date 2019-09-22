import React, { Component } from "react";

import { Title, Container } from "../GerenciarEquipe/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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
                  {currentUser.isProfessor && (
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
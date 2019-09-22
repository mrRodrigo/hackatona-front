import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: #fdfdfd;
  font-weight: 100;
  font-size: 38px;
`;

export const TeamNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TeamNameInput = styled.input`
  font-weight: 100;
  color: #fff;
  border: 0px;
  background-color: #323250;
  font-family: "VT323", monospace, sans-serif;
  font-size: 26px;
  ::placeholder {
    color: #fff;
  }
`;

export const Text = styled.p`
  font-weight: 100;
  color: #fdfdfd;
  font-size: 20px;
  margin-bottom: 20px;
`;

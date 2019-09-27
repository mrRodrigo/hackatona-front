import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
`;

export const LabelInput = styled.label`
  font-size: 24px;
  color: #5e5e5e;
`;

export const Input = styled.input`
  margin: 10px;
  border-radius: 24px;
  border: 0px #dfe1e5;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.33);
  font-family: "VT323";
  font-size: 20px;
  height: ${props => props.height || "35px"};
  width: ${props => props.width || "300px"};
`;

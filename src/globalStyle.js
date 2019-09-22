import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: all 0.2s;  
}

html, body, #root {
    height: 100%;
}

li {
    list-style-type: none;
}

body{
    @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    font-family: "VT323", monospace, sans-serif;
    background-color: #323250;
}

`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const CardContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 90%;
  width: 70%;
  border-radius: 10px;
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

export const Button = styled.button`
  height: ${props => props.height || "35px"};
  width: ${props => props.width || "200px"};
  border-radius: 8px;
  margin-left: 10px;
  background-color: #ffa600;
  border: 0px;
  font-size: 20px;
  color: #fff;
  font-family: "VT323";

  :disabled {
    background-color: #5e5e5e;
    :hover {
      background-color: #5e5e5e;
      box-shadow: #454545 -1px 1px, #454545 -2px 2px, #454545 -3px 3px,
        #454545 -4px 4px, #454545 -5px 5px;
      transform: translate3d(4px, -4px, 0);
      transition-delay: 0s;
      transition-duration: 0.4s;
      transition-property: all;
      transition-timing-function: line;
    }
  }
  :hover {
    background-color: #ffa600;
    box-shadow: #bd7b02 -1px 1px, #bd7b02 -2px 2px, #bd7b02 -3px 3px,
      #bd7b02 -4px 4px, #bd7b02 -5px 5px;
    transform: translate3d(4px, -4px, 0);
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;

export const Table = styled.table`
  width: 99%;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const TableHead = styled.thead`
  font-size: 26px;
  text-align: left;
  margin: 20px;
  color: #fdfdfd;
`;

export const Tr = styled.tr`
  background-color: #fdfdfd;

  &:nth-child(odd) {
    background-color: LightGrey !important;
  }
  &:nth-child(1) {
    background-color: darkgray !important;
  }

  :hover {
    background-color: darkgray;
  }
`;

export const TableData = styled.td`
  font-size: 24px;
  border: 1px solid LightGrey;
  text-align: center;
  vertical-align: middle;
  height: 40px;
  max-width: 10px;
`;

export const TableHeadData = styled.td`
  font-size: 24px;
  border: 1px solid LightGrey;
  text-align: center;
  vertical-align: middle;
  height: 20px;
  max-width: 10px;
`;

export const TableDataID = styled.td`
  font-size: 24px;
  border: 1px solid LightGrey;
  text-align: center;
  vertical-align: middle;
  height: 20px;
  width: 10px;
`;

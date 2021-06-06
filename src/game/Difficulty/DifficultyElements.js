import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.div`
  min-height: 200px;
  padding: 5em;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const ContainerWin = styled.div`
  min-height: 200px;
  padding: 5em;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #282c34;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerWinText = styled.div`
  color: #fff;
`;

export const WinButton = styled(LinkRouter)`
  border: #282c34;
  border-style: solid;
  border-width: 5px;
  border-radius: 50px;
  background: #01bf71;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  outline: none;

`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkRouter)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  padding: 1em;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto;
  z-index: 1;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormBackButton = styled(LinkRouter)`
  background: #01bf71;
  padding: 16px 0;
  margin-top: 20px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

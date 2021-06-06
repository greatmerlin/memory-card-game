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

export const PlayerNameDiv = styled.div`
  background: #282c34;
  color: #fff;
  border: #282c34;
  border-style: solid;
  border-width: 5px;
  padding: 5px;
`;

export const DifficultyDiv = styled.div`
  background: #282c34;
  color: #52bbd8;
  border: #282c34;
  border-style: solid;
  border-width: 5px;
  padding: 5px;
`;

export const ScoreDiv = styled.div`
  background: #282c34;
  color: #ed4949;
  border: #282c34;
  border-style: solid;
  border-width: 5px;
  padding: 5px;
`;

export const HallOfFame = styled.div`
  background: #000;
  color: #01bf71;
  border: #01bf71;
  border-style: solid;
  border-width: 5px;
  padding: 5px;
  text-align: center;
  font-size: 2rem;
`;

export const BackButton = styled(LinkRouter)`
  background: #000;
  padding: 10px;
  border-radius: 4px;
  color: #01bf71;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin: 10px;
`;


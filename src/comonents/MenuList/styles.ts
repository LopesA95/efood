import styled from "styled-components";
import { colors } from "../../style/theme/default";

export const Container = styled.section`
  background-color: ${colors.backgroundColor};
`;
export const List = styled.ul<{ newRoute?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.newRoute ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  column-gap: ${(props) => (props.newRoute ? "40px" : "80px")};
  margin-top: ${(props) => (props.newRoute ? "280px" : "80px")};
  row-gap: 40px;
  justify-content: center;
`;

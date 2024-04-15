import styled from "styled-components";
import { colors } from "../../style/theme/default";

export const Container = styled.section`
  background-color: ${colors.backgroundColor};
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 80px;
`;

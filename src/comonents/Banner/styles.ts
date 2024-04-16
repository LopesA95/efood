import styled from "styled-components";
import { colors } from "../../style/theme/default";

export const Container = styled.div`
  width: 100%;
  height: 380px;
  padding-bottom: 56px;
`;

export const Imagem = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: auto;
  margin-top: 65px;
  img {
    width: 100%;
  }
`;

export const Title = styled.h2`
  position: relative;
  color: ${colors.white};
  font-weight: 100;
  font-size: 32px;
  top: 180px;
  margin-left: 170px;
  line-height: 38px;
`;

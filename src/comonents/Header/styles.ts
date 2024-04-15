import styled from "styled-components";
import { colors } from "../../style/theme/default";

export const Image = styled.div`
  width: 100%;
  height: 380px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  img {
    margin-top: 64px;
  }
`;
export const Title = styled.h1`
  width: 540px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 45px;
  align-items: center;
  margin-top: 140px;
  color: ${colors.colorSecondary};
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

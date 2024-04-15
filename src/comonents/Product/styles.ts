import styled from "styled-components";
import { colors } from "../../style/theme/default";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  color: ${colors.colorSecondary};
  border: 1px solid ${colors.colorSecondary};
  margin-bottom: 48px;
  row-gap: 48px;

  div {
    display: flex;
    align-items: center;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const CardTitle = styled.h3`
  padding: 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
`;

export const CardDescription = styled.p`
  padding: 16px;
  font-size: 14px;
  line-height: 22px;
`;
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ColorPrimary};
  top: 806px;
  margin-left: 8px;

  margin-bottom: 8px;
  a {
    text-decoration: none;
    color: ${colors.ColorPrimary};
    background-color: ${colors.colorSecondary};
    padding: 6px 4px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 8px;
  }
`;

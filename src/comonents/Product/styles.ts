import styled from "styled-components";
import { colors } from "../../style/theme/default";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div<{ newRoute?: boolean }>`
  background-color: ${(props) =>
    props.newRoute ? colors.colorSecondary : colors.white};
  position: relative;
  color: ${(props) => (props.newRoute ? colors.white : colors.colorSecondary)};
  border: 1px solid ${colors.colorSecondary};
  margin-bottom: 40px;
  row-gap: 48px;

  div {
    display: flex;
    align-items: center;
    height: 24px;
  }

  button.japonesa {
    color: ${colors.ColorPrimary};
    font-weight: bold;
    background-color: ${colors.ColorPrimary};
    border: 1px solid ${colors.ColorPrimary};
    font-size: 18px;
    width: 100%;
    color: ${colors.ColorPrimary};
  }
  ${TagContainer} {
    margin-right: 8px;
  }

  ${(props) =>
    props.newRoute &&
    `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 320px;
    height: 340px;
    row-gap: 20px;

    img{
      padding: 8px;
    }

  `}
`;

export const CardTitle = styled.h3`
  padding: 0 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  margin-top: 8px;
`;

export const CardDescription = styled.p`
  display: flex;
  padding: 16px 8px;
  font-size: 14px;
  line-height: 22px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Content = styled.div<{ newRoute?: boolean }>`
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 8px;
  }

  ${(props) =>
    props.newRoute &&
    `
    display: none;
    padding: 8px;
    margin: 0;
    justify-content: none;
  `}
`;

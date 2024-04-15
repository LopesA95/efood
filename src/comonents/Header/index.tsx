import { ContentHeader, Image, Title } from "./styles";

import logo from "../../assets/images/logo.svg";
import backgroundImage from "../../assets/images/fundo_header.svg";

export const Header = () => (
  <Image style={{ backgroundImage: `url(${backgroundImage})` }}>
    <ContentHeader>
      <img src={logo} alt="EFOOD" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </ContentHeader>
  </Image>
);

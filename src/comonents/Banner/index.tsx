import { useLocation } from "react-router-dom";

import italiana from "../../assets/images/imagemfundo.png";
import japonesa from "../../assets/images/imagemfundo.png";
import { Container, Imagem, Title } from "./styles";

export interface BannerData {
  [key: string]:
    | {
        title: string;
        imagePath: string;
      }
    | undefined;
}

const BANNER_DATA: BannerData = {
  "/italiana": {
    title: "Italiana",
    imagePath: italiana,
  },
  "/japonesa": {
    title: "Japonesa",
    imagePath: japonesa,
  },
};

export function Banner() {
  const location = useLocation();
  const bannerData = BANNER_DATA[location.pathname];

  return bannerData ? (
    <Container>
      <Title className="container">{bannerData.title}</Title>
      <span></span>
      <Imagem>
        <img src={bannerData.imagePath} alt="Banner" />
      </Imagem>
    </Container>
  ) : null;
}

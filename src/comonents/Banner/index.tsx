import { useLocation } from "react-router-dom";

import italiana from "../../assets/images/imagemfundo.png";
import japonesa from "../../assets/images/Hioki-sushi.png";
import { Content, Image, RestName, Title } from "./styles";

export interface BannerData {
  [key: string]:
    | {
        title: string;
        imagePath: string;
        restaurantName: string;
      }
    | undefined;
}

const BANNER_DATA: BannerData = {
  "/italiana": {
    title: "Italiana",
    restaurantName: "La Dolce Vita Trattoria",
    imagePath: italiana,
  },
  "/japonesa": {
    title: "Japonesa",
    restaurantName: "Hiroki Sushi",
    imagePath: japonesa,
  },
};

export function Banner() {
  const location = useLocation();
  const bannerData = BANNER_DATA[location.pathname];

  return bannerData ? (
    <Image style={{ backgroundImage: `url(${bannerData.imagePath})` }}>
      <Content>
        <Title>{bannerData.title}</Title>
        {bannerData.restaurantName && (
          <RestName>{bannerData.restaurantName}</RestName>
        )}
      </Content>
    </Image>
  ) : null;
}

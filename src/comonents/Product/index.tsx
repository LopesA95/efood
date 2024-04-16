import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import estrela from "../../assets/images/estrela.svg";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { Card, CardTitle, CardDescription, Infos, Content } from "./styles";

import fotoPratoIta from "../../assets/images/fotoprato.png";
import fotoPratoJap from "../../assets/images/Hioki-sushi.png";

interface Props {
  title: string;
  description: string;
  image: string;
  infos?: string[];
  notes: string;
  rota?: string;
}
const buttonTexts: Record<string, string> = {
  "/italiana": "Adicionar ao carrinho",
  "/japonesa": "Adicionar ao carrinho",
};

const dishImages: Record<string, string> = {
  "/italiana": fotoPratoIta,
  "/japonesa": fotoPratoJap,
};

const dishNames: Record<string, string> = {
  "/italiana": "Pizza de Marguerita",
  "/japonesa": "Hot Filadelfia",
};

export const Product = ({
  title,
  description,
  image,
  infos,
  notes,
  rota,
}: Props) => {
  const location = useLocation();
  const [mainDishImage, setMainDishImage] = useState(image);
  const [mainTitle, setMainTitle] = useState(title);
  const newRoute = !!dishImages[location.pathname];
  const [buttonText, setButtonText] = useState("Saiba mais");

  useEffect(() => {
    if (newRoute) {
      setMainDishImage(dishImages[location.pathname]);
      setMainTitle(dishNames[location.pathname]);
      setButtonText(buttonTexts[location.pathname]);
    } else {
      setMainDishImage(image);
      setMainTitle(title);
      setButtonText("Saiba mais");
    }
  }, [location.pathname, image, title, newRoute]);

  return (
    <Card newRoute={newRoute}>
      <img src={mainDishImage} alt={mainTitle} />
      <Infos>
        {infos &&
          infos.map((info) => (
            <Tag key={info} size="small" colortext="primary">
              {info}
            </Tag>
          ))}
      </Infos>
      <Content newRoute={newRoute}>
        <CardTitle>{mainTitle}</CardTitle>
        {newRoute ? null : (
          <div>
            <Tag
              colortext="secondary"
              style={{ backgroundColor: "transparent" }}
              size="medium"
            >
              {notes}
            </Tag>
            <img src={estrela} alt="Estrela" />
          </div>
        )}
      </Content>
      <CardDescription>{description}</CardDescription>
      <Button to={rota} title={buttonText}>
        {buttonText}
      </Button>
    </Card>
  );
};

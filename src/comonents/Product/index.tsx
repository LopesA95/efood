import estrela from "../../assets/images/estrela.svg";
import { Tag } from "../Tag";
import {
  Card,
  CardButton,
  CardDescription,
  CardTitle,
  Content,
  Infos,
} from "./styles";

export type Props = {
  title: string;
  category: string;
  description: string;
  infos: string[];
  image: string;
  notes: string;
};

export const Product = ({ title, description, image, infos, notes }: Props) => (
  <Card className="container">
    <img src={image} alt={image} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" colorText="primary" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Content>
      <CardTitle>{title}</CardTitle>
      <div>
        <Tag colorText="secondary" style={{ backgroundColor: "transparent" }}>
          {notes}
        </Tag>
        <img src={estrela} alt={estrela} />
      </div>
    </Content>
    <CardDescription>{description}</CardDescription>
    <CardButton>
      <a href="#">Saiba mais</a>
    </CardButton>
  </Card>
);

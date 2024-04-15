import { Menu } from "../../models/Menu";
import { Product } from "../Product";
import { Container, List } from "./styles";

export type Props = {
  menus: Menu[];
};

export const MenuList = ({ menus }: Props) => (
  <Container className="container">
    <List>
      {menus.map((menu) => (
        <Product
          key={menu.id}
          category={menu.category}
          description={menu.description}
          image={menu.image}
          infos={menu.infos}
          title={menu.title}
          notes={menu.notes}
        />
      ))}
    </List>
  </Container>
);

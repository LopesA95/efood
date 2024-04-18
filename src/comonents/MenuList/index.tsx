import { useEffect, useState } from "react";
import { Menu } from "../../models/Menu";
import { Product } from "../Product";
import { Container, List } from "./styles";
import { useLocation } from "react-router-dom";

export type Props = {
  title?: string;
  menus: Menu[];
};

export const MenuList = ({ menus, title }: Props) => {
  const location = useLocation();
  const [newRoute, setNewRoute] = useState(false);

  useEffect(() => {
    if (
      location.pathname.includes("/japonesa") ||
      location.pathname.includes("/italiana")
    ) {
      setNewRoute(true);
    } else {
      setNewRoute(false);
    }
  }, [location]);

  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
        <List newRoute={newRoute}>
          {menus.map((menu) => (
            <Product
              key={menu.id}
              description={menu.description}
              image={menu.image}
              infos={menu.infos}
              title={menu.title}
              notes={menu.notes}
              rota={menu.rota}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

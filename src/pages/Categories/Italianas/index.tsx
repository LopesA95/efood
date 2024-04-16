import { MenuList } from "../../../comonents/MenuList";
import { Menu } from "../../../models/Menu";

import italiana from "../../../assets/images/Ladolcevita.png";

const italianas: Menu[] = [
  {
    id: 1,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: [],
    image: italiana,
    notes: "4.9",
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: [],
    image: italiana,
    notes: "4.6",
  },
  {
    id: 3,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: [],
    image: italiana,
    notes: "4.6",
  },
  {
    id: 4,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: [],
    image: italiana,
    notes: "4.6",
  },
  {
    id: 5,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: [],
    image: italiana,
    notes: "4.6",
  },
  {
    id: 6,
    title: "La Dolce Vita Trattoria",
    category: "Italiana",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    infos: [],
    image: italiana,
    notes: "4.6",
  },
];

export const Italiana = () => (
  <>
    <MenuList menus={italianas} title="Italianas" />
  </>
);

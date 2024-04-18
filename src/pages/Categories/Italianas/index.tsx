import { MenuList } from '../../../comonents/MenuList'
import { Menu } from '../../../models/Menu'

import italiana from '../../../assets/images/Ladolcevita.png'

const italianas: Menu[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.9'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.6'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.6'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.6'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.6'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: italiana,
    notes: '4.6'
  }
]

export const Italiana = () => (
  <>
    <MenuList menus={italianas} />
  </>
)

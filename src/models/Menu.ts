export class Menu {
  title: string;
  category: string;
  description: string;
  image: string;
  infos: string[];
  notes: string;
  id: number;

  constructor(
    title: string,
    category: string,
    description: string,
    promotion: string,
    image: string,
    infos: string[],
    notes: string,
    id: number,
  ) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.infos = infos;
    this.notes = notes;
    this.id = id;
  }
}

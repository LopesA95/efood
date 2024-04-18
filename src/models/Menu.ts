export class Menu {
  title: string
  category: string
  description: string
  image: string
  infos: string[]
  notes: string
  id: number
  rota?: string

  constructor(
    title: string,
    category: string,
    description: string,
    image: string,
    infos: string[],
    notes: string,
    id: number,
    rota: string
  ) {
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.notes = notes
    this.id = id
    this.rota = rota
  }
}

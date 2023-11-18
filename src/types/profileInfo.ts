export type InfoContentType = {
  title: string
  text: string
}

export type InfoColumnType = {
  mainTitle: string
  column: InfoContentType[]
  column2: InfoContentType[]
}

export type InfoProfileType = {
  infoCard: InfoColumnType
}
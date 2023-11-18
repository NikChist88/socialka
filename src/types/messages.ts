export type MessageType = {
  id: number
  name: string
  message: string
  avatar: string
  date: string
}

export type MessagesPageType = {
  messages: MessageType[]
  newMessage: string
}
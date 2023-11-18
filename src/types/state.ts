import { MessageType } from "./messages"
import { NavbarType } from "./navbar"

export type StateType = {
  messages: MessageType[]
  newMessage: string
  navbar: NavbarType[]
}
import { MessagesPageType } from './store'
import { MessageType } from './store'
import { ActionType } from './store'
import men from '../assets/images/avatarM.png'

const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

export const messagesReducer = (
  state: MessagesPageType,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let messageID = Math.max(
        ...state.messages.map((message: MessageType) => message.id)
      )
      const newMessage: MessageType = {
        id: ++messageID,
        name: 'Dunkan Maclaud',
        message: state.newMessage,
        avatar: men,
        date: new Date().toDateString(),
      }
      state.messages.push(newMessage)
      state.newMessage = ''
      break

    case UPDATE_MESSAGE:
      state.newMessage = action.message
      break
  }

  return state
}

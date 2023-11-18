import men from '../../assets/images/avatarM.png'
import { MessageType } from '../../types/messages'
import { MessagesActionType } from '../actionTypes'
import { StateType } from '../../types/state'
import { initialState } from '..'
import { ADD_MESSAGE, UPDATE_MESSAGE } from '../actionTypes'

export const messagesReducer = (
  state: StateType = initialState,
  action: MessagesActionType
) => {

  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: Math.random(),
        name: 'Nikita Chistyakov',
        message: state.newMessage,
        avatar: men,
        date: new Date().toDateString(),
      }

      return {
        ...state,
        messages: state.messages.concat(newMessage),
        newMessage: (action.message = ''),
      }

    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessage: action.message,
      }

    default:
      return state
  }
}

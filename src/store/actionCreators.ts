import { ADD_MESSAGE, UPDATE_MESSAGE } from './actionTypes'

// Action Creators Messages
export const addMessage = (message?: string) => ({
  type: ADD_MESSAGE,
  message: message!
})

export const updateMessage = (message: string) => ({
  type: UPDATE_MESSAGE,
  message: message,
})

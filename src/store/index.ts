import men from '../assets/images/avatarM.png'
import { messagesReducer } from './reducers/messagesReducer'
import { configureStore } from '@reduxjs/toolkit'
import { StateType } from '../types/state'

export const initialState: StateType = {
  messages: [
    {
      id: Math.random(),
      name: 'Sam Sepiol',
      message: 'Hello World!!!',
      avatar: men,
      date: new Date().toDateString(),
    },
  ],
  newMessage: '',
  navbar: [
    {
      id: Math.random(),
      iconId: 'profile',
      to: '/profile',
      title: 'Profile',
    },
    {
      id: Math.random(),
      iconId: 'messages',
      to: '/messages',
      title: 'Messages',
    },
    {
      id: Math.random(),
      iconId: 'news',
      to: '/news',
      title: 'News',
    },
    {
      id: Math.random(),
      iconId: 'music',
      to: '/music',
      title: 'Music',
    },
    {
      id: Math.random(),
      iconId: 'settings',
      to: '/settings',
      title: 'Settings',
    },
  ],
}

export const store = configureStore({
  reducer: messagesReducer,
})

import men from '../assets/images/avatarM.png'
import woman from '../assets/images/avatarW.png'
import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

export type PostType = {
  id: number
  name: string
  post?: string
  date: string
  avatar: string
}

export type MessageType = {
  id: number
  name: string
  message?: string
  avatar: string
  date: string
}

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

export type SidebarLinkType = {
  id: number
  link: string
}

export type SidebarType = {
  sidebarLinks: SidebarLinkType[]
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string | undefined
  profileInfo: InfoProfileType
}

export type MessagesPageType = {
  messages: MessageType[]
  newMessage: string | undefined
}

export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscribe: (observer: (state: StateType) => void) => void
  dispatch: (action: {
    type: string
    post?: string | undefined
    message?: string | undefined
  }) => void
}

export type ActionType = {
  type: string
  post?: string | undefined
  message?: string | undefined
}

export const store: StoreType = {
  // State
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          name: 'Sam Sepiol',
          post: 'Hello World!!!',
          date: new Date().toDateString(),
          avatar: men,
        },
        {
          id: 2,
          name: 'Silvestre Stallone',
          post: 'Hello friends!!!',
          date: new Date().toDateString(),
          avatar: woman,
        },
      ],
      newPost: '',
      profileInfo: {
        infoCard: {
          mainTitle: 'Personal Information',
          column: [
            {
              title: 'name',
              text: 'Sam Sepiol',
            },
            {
              title: 'birthday',
              text: '07/08/1988',
            },
            {
              title: 'website',
              text: 'www.it-kamasutra.com',
            },
          ],
          column2: [
            {
              title: 'gender',
              text: 'male',
            },
            {
              title: 'location',
              text: 'Russia',
            },
            {
              title: 'biography',
              text: 'Frontend Developer',
            },
          ],
        },
      },
    },
    messagesPage: {
      messages: [
        {
          id: 1,
          name: 'Sam Sepiol',
          message: 'Hello World!!!',
          avatar: men,
          date: new Date().toDateString(),
        },
        {
          id: 2,
          name: 'Jhony Depp',
          message: 'Hello friends!!!',
          avatar: men,
          date: new Date().toDateString(),
        },
        {
          id: 3,
          name: 'Arnold Shwarzenneger',
          message: 'Hey, Hey, Hey!!!',
          avatar: men,
          date: new Date().toDateString(),
        },
      ],
      newMessage: '',
    },
    sidebar: {
      sidebarLinks: [
        { id: 1, link: 'Profile' },
        { id: 2, link: 'Messages' },
        { id: 3, link: 'News' },
        { id: 4, link: 'Music' },
        { id: 5, link: 'Settings' },
      ],
    },
  },

  // Rerender Tree
  _callSubscriber(state: StateType) {
    console.log('State change!')
  },

  // Getter state
  getState() {
    return this._state
  },

  // Subscribe
  subscribe(observer: (state: StateType) => void) {
    this._callSubscriber = observer
  },

  // Dispatch
  dispatch(action: ActionType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
    // this._state.profilePage = profileReducer(this._state.profilePage, action)
    // messagesReducer(this._state, addMessage())
  },
}

// Action Creators
export const addPost = () => ({ type: ADD_POST })
export const updatePost = (post: string | undefined) => ({
  type: UPDATE_POST,
  post: post,
})

export const addMessage = () => ({ type: ADD_MESSAGE })
export const updateMessage = (message: string | undefined) => ({
  type: UPDATE_MESSAGE,
  message: message,
})

import men from '../assets/images/avatarM.png'
import woman from '../assets/images/avatarW.png'

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
  message: string
  avatar: string
  date: string
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string | undefined
}

export type MessagesPageType = {
  messages: MessageType[]
}

export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
}

export type StoreType = {
  _state: StateType
  getState: () => StateType
  _callSubscriber: (state: StateType) => void
  addPost: () => void
  updatePost: (newPost: string | undefined) => void
  subscribe: (observer: (state: StateType) => void) => void
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
    },
  },

  // Getter state
  getState() {
    return this._state
  },

  // Rerender Tree
  _callSubscriber(state: StateType) {
    console.log('State change!')
  },

  // Add Post
  addPost() {
    let maxId = Math.max(
      ...this._state.profilePage.posts.map((post) => post.id)
    )

    const newPost: PostType = {
      id: ++maxId,
      name: 'Nick Chistyakov',
      post: this._state.profilePage.newPost,
      date: new Date().toDateString(),
      avatar: men,
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPost = ''
    this._callSubscriber(this._state)
  },

  // Update Post
  updatePost(newPost: string | undefined) {
    this._state.profilePage.newPost = newPost
    this._callSubscriber(this._state)
  },

  // Subscribe
  subscribe(observer: (state: StateType) => void) {
    this._callSubscriber = observer
  },
}

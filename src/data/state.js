import men from '../assets/images/avatarM.png'
import woman from '../assets/images/avatarW.png'
import { renderEntireTree } from '../render'

export const state = {
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
      {
        id: 4,
        name: 'Tim Tim',
        message: 'Privet!!!',
        avatar: men,
        date: new Date().toDateString(),
      },
      {
        id: 5,
        name: 'Jane Do',
        message: 'Yo, Yo, Yo!!!',
        avatar: woman,
        date: new Date().toDateString(),
      },
    ],
  },
}

export const addPost = (post) => {
  let maxId = Math.max(...state.profilePage.posts.map((post) => post.id))

  const newPost = {
    id: ++maxId,
    name: 'Nick Chistyakov',
    post: post,
    date: new Date().toDateString(),
    avatar: men,
  }

  state.profilePage.posts.push(newPost)
  renderEntireTree(state)
}

export const updatePost = (newPost) => {
  state.profilePage.newPost = newPost
  renderEntireTree(state)
}

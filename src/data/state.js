import men from '../assets/images/avatarM.png'
import woman from '../assets/images/avatarW.png'

let rerenderEntireTree = () => {
  console.log('State change!');
}

// State
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
    ],
  },
}

// Add post
export const addPost = () => {
  let maxId = Math.max(...state.profilePage.posts.map((post) => post.id))

  const newPost = {
    id: ++maxId,
    name: 'Nick Chistyakov',
    post: state.profilePage.newPost,
    date: new Date().toDateString(),
    avatar: men,
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPost = ''
  rerenderEntireTree(state)
}

// Update post
export const updatePost = (newPost) => {
  state.profilePage.newPost = newPost
  rerenderEntireTree(state)
}

// Subscribe
export const subscripe = (observer) => {
  rerenderEntireTree = observer
}
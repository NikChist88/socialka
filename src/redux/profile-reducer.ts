import { PostType } from './store'
import { ProfilePageType } from './store'
import { ActionType } from './store'
import men from '../assets/images/avatarM.png'

const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      let postID = Math.max(...state.posts.map((post) => post.id))
      const newPost: PostType = {
        id: ++postID,
        name: 'Nick Chistyakov',
        post: state.newPost,
        date: new Date().toDateString(),
        avatar: men,
      }
      state.posts.push(newPost)
      state.newPost = ''
      break

    case UPDATE_POST:
      state.newPost = action.post
      break
  }

  return state
}

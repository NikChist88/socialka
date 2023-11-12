import './Profile.scss'
import user from '../../../assets/images/user.png'
import { Posts } from './posts/Posts'
import { PostType } from './posts/post/Post'

type ProfilePropsType = {
  profilePage: {
    posts: PostType[]
    newPost: string
  }
  addPost: () => void
  updatePost: (newPost: string | undefined) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <section className="Profile">
      <h2 className="Profile__title">Profile</h2>
      <div className="Profile__user">
        <img src={user} alt="User avatar" />
        <span>Sam Sepiol</span>
      </div>
      <Posts
        posts={props.profilePage.posts}
        newPost={props.profilePage.newPost}
        addPost={props.addPost}
        updatePost={props.updatePost}
      />
    </section>
  )
}

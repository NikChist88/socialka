import './Profile.scss'
import user from '../../../assets/images/user.png'
import { Posts } from './posts/Posts'
import { PostsTypes } from './posts/Posts'

export const Profile: React.FC<PostsTypes> = ({ posts, addPost }) => {
  return (
    <section className="Profile">
      <h2 className="Profile__title">Profile</h2>
      <div className="Profile__user">
        <img src={user} alt="User avatar" />
        <span>Sam Sepiol</span>
      </div>
      <Posts posts={posts} addPost={addPost} />
    </section>
  )
}

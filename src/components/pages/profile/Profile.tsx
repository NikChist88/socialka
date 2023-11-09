import './Profile.scss'
import user from '../../../assets/images/user.png'
import { Posts } from './posts/Posts'

export const Profile: React.FC = () => {
  return (
    <section className='Profile'>
      <h2 className='Profile__title'>Profile</h2>
      <div className='Profile__user'>
        <img src={user} alt="User avatar" />
        <span>Sam Sepiol</span>
      </div>
      <Posts />
    </section>
  )
}
import './Post.scss'
import user from '../../../../../assets/images/user.png'

export const Post: React.FC = () => {
  return (
    <div className='Post'>
      <img src={user} alt="User avatar" />
      <span className='Post__user'>Sam Sepiol</span>
      <p className='Post__text'>Hello friend! I love programming!!!</p>
      <span className='Post__date'>Date: 09.11.23</span>
    </div>
  )
}
import './Post.scss'
import { PostType } from '../../../../../redux/store'

export const Post: React.FC<PostType> = ({ id, name, post, date, avatar }) => {
  return (
    <div className="Post">
      <img src={avatar} alt="User avatar" />
      <span className="Post__user">{name}</span>
      <p className="Post__text">{post}</p>
      <span className="Post__date">Date: {date}</span>
    </div>
  )
}

import './Post.scss'
import { PostType } from '../../../../../redux/store'

export const Post: React.FC<PostType> = (props) => {
  return (
    <div className="Post">
      <img src={props.avatar} alt="User avatar" />
      <span className="Post__user">{props.name}</span>
      <p className="Post__text">{props.post}</p>
      <span className="Post__date">Date: {props.date}</span>
    </div>
  )
}

import '../Messages.scss'
import { MessageType } from '../../../../redux/store'

export const Message: React.FC<MessageType> = (props) => {
  return (
    <div className="Message">
      <img src={props.avatar} alt="User avatar" />
      <span className="Message__user">{props.name}</span>
      <p className="Message__text">{props.message}</p>
      <span className="Message__date">Date: {props.date}</span>
    </div>
  )
}

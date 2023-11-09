import '../Messages.scss'
import user from '../../../../assets/images/avatarM.png'

export type MessageType = {
  id: number
  name: string
  avatar: string
  message: string
  date: string
}

export const Message: React.FC<MessageType> = ({
  id,
  name,
  message,
  avatar,
  date,
}) => {
  return (
    <div className="Message">
      <img src={avatar} alt="User avatar" />
      <span className="Message__user">{name}</span>
      <p className="Message__text">{message}</p>
      <span className="Message__date">Date: {date}</span>
    </div>
  )
}

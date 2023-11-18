import '../Messages.scss'
import { FC } from 'react'
import { MessageType } from '../../../../types/messages'

export const Message: FC<MessageType> = (props) => {
  const { avatar, name, message, date } = props
  
  return (
    <div className="Message">
      <img src={avatar} alt="User avatar" />
      <span className="Message__user">{name}</span>
      <p className="Message__text">{message}</p>
      <span className="Message__date">Date: {date}</span>
    </div>
  )
}

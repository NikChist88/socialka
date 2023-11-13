import './Messages.scss'
import { Message } from './message/Message'
import { MessagesPageType } from '../../../redux/store'

export const Messages: React.FC<MessagesPageType> = ({ messages }) => {
  return (
    <div className="Messages">
      <h2 className="Messages__title">Messages</h2>
      {messages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          name={message.name}
          message={message.message}
          avatar={message.avatar}
          date={message.date}
        />
      ))}
      <div className="Messages__form">
        <textarea
          className="Messages__field"
        />
        <button className="Messages__btn">
          Add Message
        </button>
      </div>
    </div>
  )
}

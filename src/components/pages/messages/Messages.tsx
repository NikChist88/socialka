import './Messages.scss'
import { Message } from './message/Message'
import { MessageType } from './message/Message'

type MessagesTypes = {
  messages: MessageType[]
}

export const Messages: React.FC<MessagesTypes> = ({ messages }) => {
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
    </div>
  )
}

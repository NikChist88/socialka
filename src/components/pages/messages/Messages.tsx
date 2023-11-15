import './Messages.scss'
import { Message } from './message/Message'
import { MessageType } from '../../../redux/store'
import { addMessage, updateMessage } from '../../../redux/store'

type MessagesPropsType = {
  messages: MessageType[]
  newMessage: string | undefined
  dispatch: (action: { type: string; message?: string | undefined }) => void
}

export const Messages: React.FC<MessagesPropsType> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value
    props.dispatch(updateMessage(newMessage))
  }

  const onClickHandler = () => {
    props.dispatch(addMessage())
  }

  return (
    <div className="Messages">
      <h2 className="Messages__title">Messages</h2>
      {props.messages.map((message) => (
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
          value={props.newMessage}
          onChange={onChangeHandler}
        />
        <button className="Messages__btn" onClick={onClickHandler}>
          Add Message
        </button>
      </div>
    </div>
  )
}

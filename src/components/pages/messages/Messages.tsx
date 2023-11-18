import './Messages.scss'
import { FC, ChangeEvent } from 'react'
import { Message } from './message/Message'
import { MessageType } from '../../../types/messages'
import { MessagesActionType } from '../../../store/actionTypes'
import { addMessage, updateMessage } from '../../../store/actionCreators'

type MessagesPropsType = {
  messages: MessageType[]
  newMessage: string
  dispatch: (action: MessagesActionType) => void
}

export const Messages: FC<MessagesPropsType> = (props) => {
  const { messages, newMessage, dispatch } = props

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text: string = e.target.value
    dispatch(updateMessage(text))
  }

  const onClickHandler = () => {
    dispatch(addMessage())
  }

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
          value={newMessage}
          onChange={onChangeHandler}
        />
        <button className="Messages__btn" onClick={onClickHandler}>
          Add Message
        </button>
      </div>
    </div>
  )
}

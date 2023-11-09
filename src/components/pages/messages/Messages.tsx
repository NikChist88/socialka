import './Messages.scss'
import { Message } from './message/Message'

export const Messages: React.FC = () => {
  return (
    <div className="Messages">
      <h2 className="Messages__title">Messages</h2>
      <Message />
      <Message />
      <Message />
    </div>
  )
}

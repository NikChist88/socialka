import '../Messages.scss'
import user from '../../../../assets/images/avatarM.png'

export const Message = () => {
  return (
    <div className="Message">
      <img src={user} alt="User avatar" />
      <span className="Message__user">Dolores Haze</span>
      <p className="Message__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, harum.
      </p>
      <span className="Message__date">Date: 09.11.23</span>
    </div>
  )
}

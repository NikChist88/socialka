import { FC } from 'react'
import './Profile.scss'
import '../profile/info/InfoCard.scss'
import user from '../../../assets/images/user.jpg'
import { ProfilePageType } from '../../../types/profile'
import { InfoCard } from './info/InfoCard'

type ProfilePropsType = {
  profilePage: ProfilePageType
}

export const Profile: FC = (props) => {
  // const { profilePage } = props

  return (
    <section className="Profile">
      <h2 className="Profile__title">Profile</h2>
      <div className="Profile__body">
        <div className="Profile__user">
          <img src={user} alt="User avatar" />
          <span>Sam Sepiol</span>
        </div>
      </div>
      <div className="Info">
        {/* <InfoCard infoCard={profilePage.profileInfo.infoCard} /> */}
      </div>
    </section>
  )
}

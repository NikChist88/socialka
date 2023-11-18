import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarType } from '../../types/navbar'
import { Icon } from '../icon/Icon'

export const NavbarLink: FC<NavbarType> = (props) => {
  const { title, to, iconId } = props

  return (
    <li className="Navbar__item">
      <NavLink className="Navbar__link" to={to}>
        <Icon
          iconId={iconId}
          className={'Navbar__icon'}
          width={'22px'}
          height={'22px'}
        />
        {title}
      </NavLink>
    </li>
  )
}

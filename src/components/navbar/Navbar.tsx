import './Navbar.scss'
import {
  RiProfileLine,
  RiMessage2Line,
  RiNewspaperLine,
  RiMusic2Line,
  RiSettings2Line,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { SidebarType } from '../../redux/store'

type NavbarPorpsType = {
  sidebar: SidebarType
}

export const Navbar: React.FC<NavbarPorpsType> = (props) => {
  return (
    <aside className="Navbar">
      <nav className="Navbar__nav">
        <ul className="Navbar__list">
          <h3 className="Navbar__title">Pages</h3>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/profile">
              <RiProfileLine className="Navbar__icon" size={'18px'} />
              Profile
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/messages">
              <RiMessage2Line className="Navbar__icon" size={'18px'} />
              Messages
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiNewspaperLine className="Navbar__icon" size={'18px'} />
              News
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiMusic2Line className="Navbar__icon" size={'18px'} />
              Music
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiSettings2Line className="Navbar__icon" size={'18px'} />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

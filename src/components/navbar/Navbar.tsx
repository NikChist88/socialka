import './Navbar.scss'
import {
  RiProfileLine,
  RiMessage2Line,
  RiNewspaperLine,
  RiMusic2Line,
  RiSettings2Line,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <aside className="Navbar">
      <nav className="Navbar__nav">
        <ul className="Navbar__list">
          <h3 className="Navbar__title">Menu</h3>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/profile">
              <RiProfileLine className="Navbar__icon" size={'24px'} />
              Profile
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/messages">
              <RiMessage2Line className="Navbar__icon" size={'24px'} />
              Messages
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiNewspaperLine className="Navbar__icon" size={'24px'} />
              News
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiMusic2Line className="Navbar__icon" size={'24px'} />
              Music
            </NavLink>
          </li>
          <li className="Navbar__item">
            <NavLink className="Navbar__link" to="/">
              <RiSettings2Line className="Navbar__icon" size={'24px'} />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

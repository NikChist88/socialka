import './Navbar.scss'
import { FC } from 'react'
import { NavbarLink } from './NavbarLink'
import { NavbarType } from '../../types/navbar'

type NavbarPropsType = {
  navbar: NavbarType[]
}

export const Navbar: FC<NavbarPropsType> = ({ navbar }) => {
  return (
    <aside className="Navbar">
      <nav className="Navbar__nav">
        <ul className="Navbar__list">
          <h3 className="Navbar__title">Pages</h3>
          {navbar.map((el) => {
            return (
              <NavbarLink
                key={el.id}
                id={el.id}
                to={el.to}
                title={el.title}
                iconId={el.iconId}
              />
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

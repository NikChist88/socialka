import { Logo } from '../logo/Logo'
import './Header.scss'

export const Header = () => {
  return (
    <header className="Header">
      <div className="Container">
        <Logo />
      </div>
    </header>
  )
}

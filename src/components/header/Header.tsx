import { Logo } from '../logo/Logo'
import './Header.scss'

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="Container">
        <Logo />
      </div>
    </header>
  )
}

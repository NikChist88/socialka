import logo from '../../assets/images/logo.png'
import '../logo/Logo.scss'

export const Logo: React.FC = () => {
  return (
    <a className="Logo" href="">
      <img className="Logo__img" src={logo} alt="Logotype" />
      <span className="Logo__name">TheSocialka.</span>
    </a>
  )
}

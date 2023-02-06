import './Header.css'
import Nav from '../Nav/Nav'
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='bushido budo logo'/>
      <Nav />
      </div>
    </header>
  )
}

export default Header
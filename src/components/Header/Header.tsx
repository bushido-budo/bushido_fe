import './Header.css'
import Nav from '../Nav/Nav'
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <header>
      <div className='logo-container'>
        <img src={logo} alt='bushido budo logo'/>
      <Nav />
      </div>
    </header>
  )
}

export default Header
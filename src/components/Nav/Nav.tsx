import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='links-container'>
        <div>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div>
          <NavLink to='/dashboard/student_id'>My Dashboard</NavLink>
        </div>
        <div>
          <NavLink to='/dashboard/admin'>Admin Dashboard</NavLink>
        </div>
        <div>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav
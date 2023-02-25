import { FC } from 'react';
import { Admin } from "../../interfaces/interfaces"
import './AdminDashboard.css'

interface AdminDashboardProps {
  adminInfo: Admin
}

const AdminDashboard: FC<AdminDashboardProps> = ({ adminInfo }) => {
  return (
    <div className='admin-sections-container'>
    <div className='admin-upper-sections-container'>
    <section className='students-list'>

    </section>
    <section className='dojo-metrics'>

    </section>
    <section className='belt-ranks'>

    </section>
    </div>
    <div className='admin-lower-section-container'>
    <section className='fitness-challenge-info'>

    </section>
    </div>
  </div>
  )
}

export default AdminDashboard
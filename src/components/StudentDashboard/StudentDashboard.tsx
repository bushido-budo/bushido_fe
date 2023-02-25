import { FC } from 'react';
import { Student } from '../../interfaces/interfaces';
import './StudentDashboard.css'

interface StudentDashboardProps {
  studentInfo: Student
}

const StudentDashboard: FC<StudentDashboardProps> = ({ studentInfo }) => {
  return (
    <div className='student-sections-container'>
      <div className='student-upper-sections-container'>
      <section className='student-profile'>

      </section>
      <section className='student-metrics'>

      </section>
      </div>
      <div className='student-lower-section-container'>
      <section className='student-techniques'>

      </section>
      </div>
    </div>
  )
}

export default StudentDashboard
import { FC } from 'react';
import { Student } from '../../interfaces/interfaces';
import './StudentDashboard.css'

interface StudentDashboardProps {
  studentInfo: Student
}

const StudentDashboard: FC<StudentDashboardProps> = ({ studentInfo }) => {

  // Note: studentInfo.data.blah info breaks on page student dashboard page refresh
  // will research local storage or some other way to fix the issue

  // Also, should the studentInfo be passed down from App, or just loaded directly
  // here on page load?
  return (
    <div className='student-sections-container'>
      <div className='student-upper-sections-container'>
      <section className='student-profile'>
        <p>{`${studentInfo.data.first_name} ${studentInfo.data.last_name}`}</p>
        <p>{studentInfo.data.belt_rank}</p>
        <p>{studentInfo.data.user_status}</p>
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
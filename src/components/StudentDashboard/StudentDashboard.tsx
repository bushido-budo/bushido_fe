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
        { studentInfo.data && <img className='student-image' src={studentInfo.data.image} alt={`${studentInfo.data.first_name} ${studentInfo.data.last_name}`} />}
        { studentInfo.data && <p>Name: {`${studentInfo.data.first_name} ${studentInfo.data.last_name}`}</p> }
        { studentInfo.data && <p>Rank: {studentInfo.data.belt_rank}</p> }
        { studentInfo.data && <p>Status: {studentInfo.data.user_status}</p> }
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
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
        <p className='metrics-header'>Metrics</p>
          <p>Jump Rope</p> 
          { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.jump_rope} </p> }
          { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.jump_rope} </p> }
        <p>Sit Ups</p>
          { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.sit_ups}</p> }
          { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.sit_ups} </p> }
        <p>Balanced Kicks</p>
          { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.balanced_kicks}</p> }
          { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.balanced_kicks} </p> }
        <p>Lunge Pumps</p>
          { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.lunge_pumps}</p> }
          { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.lunge_pumps} </p> }
      </section>
      </div>
      <div className='student-lower-section-container'>
      <section className='student-techniques'>
        <div className='current-materials'>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material)[0]}</p>}
            { studentInfo.data && studentInfo.data.current_material.blocking_system.hammer.map(val => <p key={val}>{val}</p>)}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.blocking_system)[1]}</p>}
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material)[1]}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[0]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_1']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[1]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_2']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[2]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_3']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[3]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_4']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[4]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_5']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[5]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_6']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[6]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_7']}</p>}
          </div>
          <div>
            { studentInfo.data && <p> {Object.keys(studentInfo.data.current_material.eight_point_knife_counter)[7]}</p>}
            { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_8']}</p>}
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default StudentDashboard
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
        { studentInfo.data && <p> {`${studentInfo.data.first_name} ${studentInfo.data.last_name}`}</p> }
        { studentInfo.data && <p>Belt Rank: {studentInfo.data.belt_rank}</p> }
        { studentInfo.data && <p>Member Status: {studentInfo.data.user_status}</p> }
      </section>
      <section className='student-metrics'>
        <p className='metrics-header'>Metrics Data</p>
          <p className='header'>Jump Rope</p>
          <div className='data-container'>
            { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.jump_rope} </p> }
            { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.jump_rope} </p> }
          </div>
        <p className='header'>Sit Ups</p>
          <div className='data-container'>
            { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.sit_ups}</p> }
            { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.sit_ups} </p> }
          </div>
        <p className='header'>Balanced Kicks</p>
          <div className='data-container'>
            { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.balanced_kicks}</p> }
            { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.balanced_kicks} </p> }
          </div>
        <p className='header'>Lunge Pumps</p>
          <div className='data-container'>
            { studentInfo.data && <p>Your Avg: {studentInfo.data.belt_test_metrics.student_average.lunge_pumps}</p> }
            { studentInfo.data && <p>Dojo Avg: {studentInfo.data.belt_test_metrics.dojo_average.lunge_pumps} </p> }
          </div>
      </section>
      </div>
      <div className='student-lower-section-container'>
      <section className='student-techniques'>
        <div className='current-materials'>
          <div>
            <p>Blocking System</p>
            <p>Hammer:</p>
            { studentInfo.data && studentInfo.data.current_material.blocking_system.hammer.map(val => <p key={val}>{val}</p>)}
            <p>Wing Block</p>
          </div>
          <div>
            <p>Eight Point Knife Counter</p>
            <div className='counter-container'>
              <div>
                <p>Knife 1</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_1']}</p>}
              </div>
              <div>
                <p>Knife 2</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_2']}</p>}
              </div>
              <div>
                <p>Knife 3</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_3']}</p>}
              </div>
              <div>
                <p>Knife 4</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_4']}</p>}
              </div>
              <div>
                <p>Knife 5</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_5']}</p>}
              </div>
              <div>
                <p>Knife 6</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_6']}</p>}
              </div>
              <div>
                <p>Knife 7</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_7']}</p>}
              </div>
              <div>
                <p>Knife 8</p>
                { studentInfo.data && <p> {studentInfo.data.current_material.eight_point_knife_counter['knife_8']}</p>}
              </div>
            </div>
          </div>
          
          
          
          
          
          
          {/* Refactor above code */}
          {/* More data sections will need to be added and styled */}
        </div>
      </section>
      </div>
    </div>
  )
}

export default StudentDashboard
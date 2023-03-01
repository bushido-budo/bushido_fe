import { FC } from 'react';
import { Admin } from "../../interfaces/interfaces"
import './AdminDashboard.css'

interface AdminDashboardProps {
  adminInfo: Admin
}

const AdminDashboard: FC<AdminDashboardProps> = ({ adminInfo }) => {

  const studentsList = adminInfo.admin_data && adminInfo.admin_data.students.map((student, index) => {
    return (
      <div key={index}>
        <p>{student.first_name}</p>
        <p>{student.last_name}</p>
        <p>{student.current_belt_rank}</p>
        <p>{student.user_status}</p>
      </div>
    )
  })

  const beltRankList = adminInfo.admin_data && adminInfo.admin_data.belt_ranks.map(belt => {
    return (
      <div>
        <p>{belt}</p>
      </div>
    )
  })

  return (
    <div className='admin-sections-container'>
    <div className='admin-upper-sections-container'>
    <section className='students-list-container'>
      <p>Students</p>
      <div className='students-container'>
        {studentsList}
      </div>
    </section>
    <section className='dojo-metrics-container'>
      <div className='student-count'>
        <p>Number of Current Students</p>
        {adminInfo.admin_data && <p>{adminInfo.admin_data.dojo_metrics.student_count}</p>}
      </div>
      <div className='average-belt-rank'>
        <p>Average Belt Rank</p>
      {adminInfo.admin_data && <p>{adminInfo.admin_data.dojo_metrics.average_belt_rank}</p>}
      </div>
    </section>
    <section className='belt-ranks-container'>
      <p>Belt Ranks</p>
      {beltRankList}
    </section>
    </div>
    <div className='admin-lower-section-container'>
    <section className='fitness-challenge-info'>
      <div className='star-rating-container'>
        <div className='default'>
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.default_val.gold.jump_rope}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.default_val.gold.sit_ups}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.default_val.gold.balanced_kicks}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.default_val.gold.lunge_pumps}</p>}
        </div>
        <div className='black-belt'>
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.black_belt.gold.jump_rope}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.black_belt.gold.sit_ups}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.black_belt.gold.balanced_kicks}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.star_rating.black_belt.gold.lunge_pumps}</p>}
        </div>
      </div>
      <div className='dojo-average'>
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.default_val.jump_rope}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.default_val.sit_ups}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.default_val.balanced_kicks}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.default_val.lunge_pumps}</p>}
      </div>
      <div className='dojo-records'>
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.black_belt.jump_rope}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.black_belt.sit_ups}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.black_belt.balanced_kicks}</p>}
        {adminInfo.admin_data && <p>{adminInfo.admin_data.belt_ranks_fitness_challenge.dojo_average.black_belt.lunge_pumps}</p>}
      </div>
    </section>
    </div>
  </div>
  )
}

export default AdminDashboard
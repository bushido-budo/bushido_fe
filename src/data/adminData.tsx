import image_1 from "../assets/1000_F_53648608_94fr8EiDJycUhcrIJgfYmud0L5X5YZiX.jpeg"
import image_2 from "../assets/gettyimages-84483154-612x612.jpeg"
import image_3 from "../assets/photo-bearded-man-taekwondo-uniform-preparing-fight-come_182527-3870.jpeg"
import image_4 from "../assets/happy-female-fighter-posing-medium-shot_23-2148446177.jpeg"

const adminData = {
admin_data: {
    students: [ 
      {
        first_name: "Jenny",
        last_name: "McName",
        current_belt_rank: "purple",
        user_status: 1,
        image: image_1
      },
      {
        first_name: "Benny",
        last_name: "McName",
        current_belt_rank: "yellow",
        user_status: 1,
        image: image_2
      },
      {
        first_name: "Lenny",
        last_name: "McName",
        current_belt_rank: "orange",
        user_status: 1,
        image: image_3
      },
      {
        first_name: "Jenni",
        last_name: "McName",
        current_belt_rank: "black 1",
        user_status: 1,
        image: image_4
      },
    ], 
    dojo_metrics: {
      student_count: 50,
      average_belt_rank: "purple"
    },
    belt_ranks:["white", "yellow", "orange", "purple", "blue", 
			"blue with green stripe", "green", "green with brown stripe",
			"brown 1", "brown 2", "brown 3", "black 1", "black 2",
			"black 3", "black 4", "black 5"],
    belt_ranks_fitness_challenge: {
      star_rating:{
        default_val :{
          gold: {
            jump_rope: 150,
            sit_ups: 50,
            balanced_kicks: 45,
            lunge_pumps: 45
          },
          silver:{
            jump_rope: 100,
            sit_ups: 40,
            balanced_kicks: 35,
            lunge_pumps: 35
          },
          bronze:{
            jump_rope: 75,
            sit_ups: 30,
            balanced_kicks: 25,
            lunge_pumps: 25
          }
        },
        black_belt:{
          gold:{
            jump_rope: 200,
            sit_ups: 75,
            balanced_kicks: 75,
            lunge_pumps: 75
          },
          silver:{
            jump_rope: 150,
            sit_ups: 50,
            balanced_kicks: 50,
            lunge_pumps: 50
          },
          bronze:{
            jump_rope: 125,
            sit_ups: 35,
            balanced_kicks: 35,
            lunge_pumps: 35
          }
        }
      },
      dojo_average:{
        default_val:{
          jump_rope: 85,
          sit_ups: 40,
          balanced_kicks: 32,
          lunge_pumps: 28
        },
        black_belt:{
          jump_rope: 122,
          sit_ups: 53,
          balanced_kicks: 63,
          lunge_pumps: 76
        }
      },
      dojo_records:{
        jump_rope: {
          Some_Name: 284
        },
        sit_ups: {
          Another_Person: 87
        },
        balanced_kicks: {
          Maybe_Different: 56
        },
        lunge_pumps: {
          Yet_Another: 82
        }
      }
    }
  }
}

export default adminData
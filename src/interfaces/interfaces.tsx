interface Admin {
  admin_data: {
    students: {
      first_name: string,
      last_name: string,
      current_belt_rank: string,
      user_status: number
  } [], 
    dojo_metrics: {
      student_count: number,
      average_belt_rank: string
    },
    belt_ranks: string[],
    belt_ranks_fitness_challenge: {
      star_rating: {
        default_val :{
          gold: {
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          },
          silver:{
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          },
          bronze:{
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          }
        },
        black_belt:{
          gold:{
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          },
          silver:{
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          },
          bronze:{
            jump_rope: number,
            sit_ups: number,
            balanced_kicks: number,
            lunge_pumps: number
          }
        }
      },
      dojo_average: {
        default_val: {
          jump_rope: number,
          sit_ups: number,
          balanced_kicks: number,
          lunge_pumps: number
        },
        black_belt:{
          jump_rope: number,
          sit_ups: number,
          balanced_kicks: number,
          lunge_pumps: number
        }
      },
      dojo_records: {
        jump_rope: {
          Some_Name: number
        },
        sit_ups: {
          Another_Person: number
        },
        balanced_kicks: {
          Maybe_Different: number
        },
        lunge_pumps: {
          Yet_Another: number
        }
      }
    }
  }
}

interface Student {
  data: {
		id: number,
    first_name: string,
    last_name: string,
    user_status: number,
    belt_rank: string,
    belt_test_metrics: {
      student_average: {
        jump_rope: number,
        sit_ups: number,
        balanced_kicks: number,
        lunge_pumps: number
      },
      dojo_average:{
        jump_rope: number,
        sit_ups: number,
        balanced_kicks: number,
        lunge_pumps: number
      }
    },
    current_material: {
      blocking_system: {
        hammer: number[], 
        wing_block: number[]
      },
        eight_point_knife_counter: {
          knife_1: string, 
          knife_2: string, 
          knife_3: string,
          knife_4: string,
          knife_5: string,
          knife_6: string,
          knife_7: string,
          knife_8: string
        }
      },
      club_techniques: string[],
      combinations: {
        purple: number[]
      },
      foot_works: string[],
      grab_defenses: string[],
      kata_forms: string[],
      kata_skills: {
      Level_2: string[]
      },
      kempo_techniques:string[],
      kick_defenses: string[],
      kicks_of_the_four_tides: string[],
      kicks: string[],
      skills: string[],
      stances: string[],
      strikes: {
        linear: string[],
        circular: string[]
      }
    }
}

export type {
  Admin,
  Student
}
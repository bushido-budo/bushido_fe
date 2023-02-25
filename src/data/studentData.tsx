const image_1 = "../assets/1000_F_53648608_94fr8EiDJycUhcrIJgfYmud0L5X5YZiX.jpeg"

const studentData = {
  data: {
		id: 1,
    first_name: "Jenny",
    last_name: "McName",
    image: image_1,
    user_status: 0,
    belt_rank: "purple",
    belt_test_metrics:{
      student_average:{
        jump_rope: 72,
        sit_ups: 44,
        balanced_kicks: 21,
        lunge_pumps: 30
      },
      dojo_average:{
        jump_rope: 98,
        sit_ups: 67,
        balanced_kicks: 38,
        lunge_pumps: 42
      }
    },
    current_material: {
      blocking_system: {
        hammer: [1,2], 
        wing_block: [1,2]
      },
        eight_point_knife_counter: {
          knife_1: "palm heel", 
          knife_2: "palm heel", 
          knife_3: "cross shuto",
          knife_4: "cross shuto",
          knife_5: "iron palm",
          knife_6: "iron palm",
          knife_7: "chicken wrist",
          knife_8: "chicken wrist"
        }
      },
      club_techniques: ["side 1"],
      combinations: {
        purple: [4, 8, 9, 12]
      },
      foot_works:["Chinese catwalk"],
      grab_defenses:["single wrist grab"],
      kata_forms:["Kata 2"],
      kata_skills: {
      Level_2: ["Transitions", "Timing", "Sentencing"]
      },
      kempo_techniques:[
        "purple belt"
      ],
      kick_defenses: [
        "Deflecting Hammer"
      ],
      kicks_of_the_four_tides: [
        "set 1", "set 2"
      ],
      kicks:[
        "front ball", "rising knee", "front instep", "side blade", "back kick", "front thrust", "side thrust", "outward crescent", "roundhouse", "spinning back", "cross behind side thrust", "spinning side thrust"
      ],
      skills:["right foot out and elbows", "punch in front two knuckle", "clock drills", "dragon breathes fire", "slapping out", "punch in hook punch"],
      stances:["horse", "flamingo", "half moon", "cat", "twist"],
      strikes: {
        linear:["front two knuckle", "thrust punch", "back two knuckle", "palm heel", "hammer",  "spearhand", "tiger's claw"],
        circular:["cross shuto", "rising elbow", "roundhouse elbow", "backfist", "hook punch", "side elbow", "rear elbow", "downward elbow", "chicken wrist", "tiger's rake", "iron palm", "downward shuto"]
      }
    }
  }

export default studentData
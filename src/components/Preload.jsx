import { motion as m } from 'framer-motion'

import q1_asteroids from '../assets/q1_asteroids_selected.svg'
import q1_energy from '../assets/q1_energy_selected.svg'
import q1_rarerock from '../assets/q1_rarerock_selected.svg'
import q2_gem from '../assets/q2_gem_selected.svg'
import q2_nametag from '../assets/q2_nametag_selected.svg'
import q2_notebook from '../assets/q2_notebook_selected.svg'
import q3_camera from '../assets/q3_camera_selected.svg'
import q3_phone from '../assets/q3_phone_selected.svg'
import q3_seeds from '../assets/q3_seeds_selected.svg'
import q4_calc from '../assets/q4_calculator_selected.svg'
import q4_notebook from '../assets/q4_notebook_selected.svg'
import q5_cake from '../assets/q5_cakencookie_selected.svg'
import q5_shroom from '../assets/q5_mushroom_selected.svg'
import q5_serum from '../assets/q5_serum_selected.svg'
import q6_ai from '../assets/q6_ai_selected.svg'
import q6_artifact from '../assets/q6_artifact_selected.svg'
import q6_music from '../assets/q6_music_selected.svg'
import q7_ballot from '../assets/q7_ballot_selected.svg'
import q7_connect from '../assets/q7_connect_selected.svg'
import q7_money from '../assets/q7_money_selected.svg'
import q8_awareness from '../assets/q8_awareness_selected.svg'
import q8_invest from '../assets/q8_invest_selected.svg'
import q8_return from '../assets/q8_return_selected.svg'
import modal from '../assets/modal.svg'
import modal2 from '../assets/modal2.svg'
import content from '../assets/content.svg'
import d_q4 from '../assets/d_q4.svg'

export const Preload1 = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      style={{ height: 0, width: 0 }}
    >
      <img src={q1_asteroids} />
      <img src={q1_energy} />
      <img src={q1_rarerock} />
      <img src={q2_gem} />
      <img src={q2_nametag} />
      <img src={q2_notebook} />
      <img src={q3_camera} />
      <img src={q3_phone} />
      <img src={q3_seeds} />
      <img src={q4_calc} />
      <img src={q4_notebook} />
      <img src={q5_cake} />
      <img src={q5_shroom} />
      <img src={q5_serum} />
    </m.div>
  ) 
}

export const Preload2 = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
      style={{ height: 0, width: 0 }}
    >
      <img src={q6_ai} />
      <img src={q6_artifact} />
      <img src={q6_music} />
      <img src={q7_ballot} />
      <img src={q7_connect} />
      <img src={q7_money} />
      <img src={q8_awareness} />
      <img src={q8_invest} />
      <img src={q8_return} />
      <img src={modal} />
      <img src={modal2} />
      <img src={d_q4} />
    </m.div>
  ) 
}
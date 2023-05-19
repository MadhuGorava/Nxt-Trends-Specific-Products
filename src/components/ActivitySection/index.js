import InnovationAndIdeation from '../InnovationAndIdeation'
import CodingSkills from '../CodingSkills'
import MagicTouch from '../MagicTouch'
import './index.css'

const ActivitySection = () => (
  <div className="container">
    <h1 className="heading">What we are looking for this in this activity?</h1>
    <div className="sub-container">
      <InnovationAndIdeation />
      <CodingSkills />
      <MagicTouch />
    </div>
  </div>
)

export default ActivitySection

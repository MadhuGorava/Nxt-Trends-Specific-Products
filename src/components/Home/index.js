import {Link} from 'react-router-dom'
import ActivitySection from '../ActivitySection'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Link to="/">
      <img
        alt="Home_Icon"
        src="https://media.glassdoor.com/sqll/682184/kratin-mobile-software-solution-pvt-ltd-squarelogo-1552994223540.png"
        className="icon"
      />
    </Link>
    <Header />
    <ActivitySection />
  </div>
)
export default Home

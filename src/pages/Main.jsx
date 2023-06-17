import Apply from "../components/Apply"
import Explore from "../components/Explore"
import Instructors from "../components/Instructors"
import LayoutPage from "../components/LayoutPage"
import Welcome from "../components/Welcome"

const Main = () => {
  return (
    <div>
          <LayoutPage />  
          <Welcome />
          <Explore />  
          <Apply />
          <Instructors />
    </div>
  )
}

export default Main

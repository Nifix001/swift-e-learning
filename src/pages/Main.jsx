import Apply from "../components/Apply"
import Explore from "../components/Explore"
import Instructors from "../components/Instructors"
import LayoutPage from "../components/LayoutPage"

const Main = () => {
  return (
    <div>
          <LayoutPage />  
          <Instructors />
          <Explore />  
          <Apply />
    </div>
  )
}

export default Main

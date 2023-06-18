import Apply from "../components/Apply"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
import Instructors from "../components/Instructors"
import LayoutPage from "../components/LayoutPage"
import Newsletter from "../components/Newsletter"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import Welcome from "../components/Welcome"

const Main = () => {
  return (
    <div>
          <LayoutPage />  
          <Welcome />
          <Explore />  
          <Apply />
          <Instructors />
          <Pricing />
          <Testimonials />
          <Newsletter />
          <Footer />
    </div>
  )
}

export default Main

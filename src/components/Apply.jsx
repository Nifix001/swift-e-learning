import { Link } from "react-router-dom"
import img from "../assets/Guy.png"

const Apply = () => {
  return (
    <div>
        <h2>Transform yourself by learning <br /> at your covenience</h2> 
        <p>Our goal is not only to provide students with education and <br /> experiences that prepare them for a successful career, but also to <br /> support them in achieving success in their chosen field by <br /> encouraging them to explore their passions and become leaders in <br /> their field.</p>
        <p>Applications are now open</p>
        <Link>Apply Now</Link>

        <div>
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Apply

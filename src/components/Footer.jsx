import { Link } from "react-router-dom"
import img from "../assets/Frame 1000001054.png"

const Footer = () => {
  return (
    <div>
        <div>
        <div>
        <img src={img} alt="" />
        <p>Most affordable and friendly E-Learning Platform</p>
        </div>
        <div>
            <h5>Quick Links</h5>
            <Link>Blog</Link>
            <Link>Pricing</Link>
            <Link>Instructors</Link>
            <Link>Careers</Link>
            <Link>Support</Link>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policies</Link>
        </div>
        <div>
            <h5>Learning Options</h5>
            <Link>Self-paced Courses</Link>
            <Link>Incubator Programs</Link>
            <Link>Personal Coaching</Link>
            <Link>Enterprise Learning</Link>
            <Link>Career-building Paths</Link>
        </div>
        <div>
            <h5>Courses</h5>
            <Link>Javascript</Link>
            <Link>React</Link>
            <Link>Power BI</Link>
            <Link>Python</Link>
            <Link>SQL</Link>
        </div>
        </div>
        <div>
        <p>Visit us</p>
        </div>      
        &copy; Copyright 2023 All Rights Reserved
    </div>
  )
}

export default Footer

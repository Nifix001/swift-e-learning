import { Link, NavLink } from "react-router-dom"
import img from "../assets/frontend.png";
import img2 from "../assets/UIUX.png";
import img3 from "../assets/React.png";
import img4 from "../assets/JS.png";

const Explore = () => {
  return (
    <div>
        <h2>Explore most popular course</h2>
        <div>
            <NavLink>All <div></div></NavLink>
            <NavLink>Web Development <div></div></NavLink>
            <NavLink>UI/UX <div></div></NavLink>
            <NavLink>Data Science <div></div></NavLink>
            <NavLink>Graphic Design <div></div></NavLink>
            <NavLink>Mobile Development <div></div></NavLink>
        </div>
        <div>
          <div>
            <img src={img} alt="" />
            <h3><span className="span">Frontend Web Development With ReactJS</span></h3>
            <p>Hello guys, welcome to front-end web <br />development with React!! This course <br />was made specifically for you, to take <br />you f...</p>
            <p>ESTIMATED TIME</p>
            <p>55 minutes</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <h3><span className="span">Introduction to UI/UX Design</span></h3>
            <p>In this short course, you will learn the <br />basics of UI/UX design, including design <br />principles, color theory, typography,<br /> and layout. You will also learn how to use design tools such as Sketch, Adobe XD, or Figma, to create wireframes and prototypes.</p>
            <p>ESTIMATED TIME</p>
            <p>2 hours</p>
          </div>
          <div>
            <img src={img3} alt="" />
            <h3><span className="span">Web Development (ReactJS)</span></h3>
            <p>ReactJS is a popular JavaScript library <br />for building user interfaces. In this <br />short course, you will learn the basics <br />of ReactJS, including components, <br />state, props, and lifecycle methods..</p>
            <p>ESTIMATED TIME</p>
            <p>1 hour 30 mins</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <h3><span className="span">Javascript Basics</span></h3>
            <p>JavaScript (JS) is a high-level programming <br />language that is commonly used for <br />creating interactive web pages and web <br />applications.</p>
            <p>ESTIMATED TIME</p>
            <p>2 hours</p>
          </div>
        </div>
        <Link>See all</Link>
    </div>
  )
}

export default Explore

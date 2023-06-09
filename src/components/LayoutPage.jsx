import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/swift logo.jpg";
import moon from "../assets/moon.jpg"

const LayoutPage = () => {
  return (
    <div>
    <header>
    <img src={logo} alt="logo" />
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="courses">Courses</NavLink>
        <NavLink to="pricing">
          <select name="" id="">
            <option value="">Pricing</option>
          </select>
        </NavLink>
        <NavLink to="testimonials">Testimonials</NavLink>
      </nav>
      <div>
        <img src={moon} alt="" />
        <input type="text" placeholder="search for courses" />
        <button>Search</button>
      </div>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutPage

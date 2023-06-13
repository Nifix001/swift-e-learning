import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/swift logo.jpg";

const LayoutPage = () => {
  return (
    <div classname="layout">
    <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Courses">Courses</NavLink>
        <NavLink>
          <select name="" id="">
            <option value="">Pricing</option>
          </select>
        </NavLink>
        <NavLink>Testimonials</NavLink>
      </nav>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutPage

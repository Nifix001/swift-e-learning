import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/swift logo.jpg";

const LayoutPage = () => {
  return (
    <div classname="layout">
    <img src={logo} alt="logo" />
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Courses</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Testimonials</NavLink>
      </nav>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutPage

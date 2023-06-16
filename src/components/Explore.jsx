import { Link, NavLink } from "react-router-dom"

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

        </div>
        <Link>See all</Link>
    </div>
  )
}

export default Explore

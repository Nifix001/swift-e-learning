import logo from "../assets/swift logo.jpg";

const LayoutPage = () => {
  return (
    <div classname="layout">
    <img src={logo} alt="logo" />
      
      <nav></nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default LayoutPage

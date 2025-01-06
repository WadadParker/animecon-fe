import { Outlet } from "react-router"
import Sidebar from "./components/SideBar/Sidebar"

const Layout = () => {
  return (
    <div className="bg-black h-screen font-ruddy flex">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
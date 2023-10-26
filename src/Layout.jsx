import { Footer } from "./Footer"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className='App'>
      <Header title="React JS Blog" />
        <Nav />
        <Outlet />
      <Footer />
    </div>
  )
}

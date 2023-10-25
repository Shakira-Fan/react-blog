import { Footer } from "./Footer"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Outlet } from "react-router-dom"
import { DataProvider } from './context/DataContext';

export const Layout = () => {
  return (
    <div className='App'>
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  )
}

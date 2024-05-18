import React from 'react'
import { Outlet, useLocation } from "react-router-dom"

//components
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="grow content-container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
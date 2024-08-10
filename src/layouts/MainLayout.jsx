import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

//components
import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout = () => {
	const location = useLocation()
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			<Header />
			<main className='grow'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout

import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorites } from '../redux/favoritesSlice'

// component
import CardSwiper from './CardSwiper'

const Card = ({ car }) => {
	const favorites = useSelector(state => state.addToFavorites)
	const dispatch = useDispatch()
	const found = favorites.some(f => f.name === car.name)

	return (
		<div
			className='bg-secondBlack flex flex-col rounded-xl relative group'
			key={car.id}
		>
			<CardSwiper
				carName={car.name}
				carImg1={car.img1}
				carImg2={car.img2}
				carImg3={car.img3}
				carImg4={car.img4}
			/>

			<div
				className={`absolute z-1 px-3 py-0.5 rounded-e-md font-medium text-base bg-skyBlueDarker top-5 left-0 ${
					car.category !== null ? 'block' : 'hidden uppercase'
				}`}
			>
				{car.category !== null ? car.category.toUpperCase() : 'Car no type'}
			</div>

			<button
				title='Add to favorites'
				onClick={() => dispatch(toggleFavorites(car))}
				className='absolute z-1 outline-none top-5 right-5 hover-hover:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 focus-visible:opacity-100'
			>
				<svg
					className={`active:scale-150 hover-hover:hover:scale-125 transition-all duration-300 ${
						found
							? 'fill-red hover-hover:hover:fill-red'
							: 'fill-current hover-hover:hover:fill-current'
					}`}
					width='40'
					height='30'
					viewBox='0 0 25 25'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M12.7882 3.84201C8.55921 -3.4587 0 0.518492 0 8.4714C0 14.4434 11.7342 23.7853 12.7882 25C13.8493 23.7853 25 14.4434 25 8.4714C25 0.578785 17.025 -3.4587 12.7882 3.84201Z' />
				</svg>
			</button>

			<div className='p-5 flex flex-col grow h-auto'>
				<div className='grow h-auto'>
					<h3 className='mb-3 text-xl md:text-2xl font-bold'>{car.name}</h3>

					<ul className='space-y-2 mb-6'>
						<li className='flex justify-between items-center text-sm md:text-base lg:text-lg font-medium border-b pt-2 pb-1'>
							<span>Avtomobil turi</span>
							<span>{car.type}</span>
						</li>

						<li className='flex justify-between items-center text-sm md:text-base lg:text-lg font-medium border-b pt-2 pb-1'>
							<span>Tezlanish 0-100</span>
							<span>{car.acceleration}s</span>
						</li>
					</ul>
				</div>

				<Link
					to='/'
					className='mainBtn active:scale-95 duration-300 transition-transform'
				>
					Batafsil
				</Link>
			</div>
		</div>
	)
}

export default Card

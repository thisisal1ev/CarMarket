import React from 'react'
import { Cars } from '../data'
import { Link } from 'react-router-dom'

// component
import Card from '../components/Card'

const CarsSection = () => {
  return (
    <section className='py-16'>

      <div className='grid mb-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10'>
        {
          Cars.splice(0, 6).map((car) => {
            return <Card key={car.id} car={car} />
          })
        }

      </div>

      <div className='flex justify-center ml-0 sm:ml-3 sm:block'>

        <Link className='bg-skyBlueDarker text-center outline-none relative text-xl font-medium rounded-lg py-3 px-32 hover:text-mainBlack focus:text-mainBlack before:shadowBtn transition-all duration-300'>
          Barcha avtomobillar
        </Link>

      </div>

    </section>
  )
}

export default CarsSection
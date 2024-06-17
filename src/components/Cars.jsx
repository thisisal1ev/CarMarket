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
          Cars.map((car) => {
            return <Card key={car.id} car={car} />
          })
        }

      </div>

      <div className='flex justify-center ml-0 sm:ml-3 sm:block'>

        <Link className='mainBtn px-16 sm:px-28 w-auto'>
          Barcha avtomobillar
        </Link>

      </div>

    </section>
  )
}

export default CarsSection
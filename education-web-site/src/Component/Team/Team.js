import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <section className='py-12 bg-gray-100 '>
      <div className='px-4 mx-auto max-w-7xl'>
        <h1 className='mt-6 mb-2 text-2xl font-medium tracking-wide text-center text-black '>OUR TEAM</h1>
        <h2 className='mt-4 mb-6 text-5xl font-bold text-center'>
        Our seasoned experts are ready to guide your online learning success.
        </h2>
        <TeamCard/>
      </div>
    </section>
  )
}

export default Team

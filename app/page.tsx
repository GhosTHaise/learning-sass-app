import CompanionCard from '@/components/companion-card'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
    </main>
  )
}

export default Page
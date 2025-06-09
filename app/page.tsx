import CompanionCard from '@/components/companion-card'
import CompanionList from '@/components/companion-list'
import CTA from '@/components/cta'
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
      <section className="home-section">
        <CompanionList />
        <CTA />
      </section>
    </main>
  )
}

export default Page
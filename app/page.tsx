import CompanionCard from '@/components/companion-card'
import CompanionList from '@/components/companion-list'
import CTA from '@/components/cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">
        Popular Companions
      </h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Netwrod of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Netwrod of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e" />
        <CompanionCard
          id="321"
          name="Neura the Brainy Explorer"
          topic="Neural Netwrod of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recentlty completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
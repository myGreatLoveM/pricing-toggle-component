'use client'
import Image from 'next/image'
import bgBottom from './images/bg-bottom.svg'
import bgTop from './images/bg-top.svg'
import ToggleButton from './components/ToggleButton'
import { useState } from 'react'
import PricingCard from './components/PricingCard'

const subscriptionPlans = [
  {
    name: 'Basic',
    monthlyPrice: 19.99,
    annuallyPrice: 199.99,
    storage: '500 GB',
    usersAllowed: 2,
    sendLimit: '3 GB',
  },
  {
    name: 'Professional',
    monthlyPrice: 24.99,
    annuallyPrice: 249.99,
    storage: '1 TB',
    usersAllowed: 5,
    sendLimit: '10 GB',
  },
  {
    name: 'Master',
    monthlyPrice: 39.99,
    annuallyPrice: 399.99,
    storage: '2 TB',
    usersAllowed: 10,
    sendLimit: '20 GB',
  },
]

function Home() {
  const [currentPricing, setCurrentPricing] = useState<'Annually' | 'Monthly'>(
    'Annually'
  )

  const handleClick = () => {
    if (currentPricing === 'Annually') {
      setCurrentPricing('Monthly')
    } else {
      setCurrentPricing('Annually')
    }
  }

  return (
    <div className='bg-very-light-grayish-blue min-h-screen w-full flex justify-center items-center relative py-10'>
      <BgImages />
      <main className='flex flex-col items-center gap-6 relative w-full'>
        <h2 className='font-bold text-grayish-Blue text-2xl'>Our Pricing</h2>
        <div className='flex gap-6 text-sm font-semibold text-light-Grayish-Blue'>
          <p>Annually</p>
          <ToggleButton pricing={currentPricing} onClick={handleClick} />
          <p>Monthly</p>
        </div>
        <section className='flex gap-3 mt-10 flex-col md:flex-row px-5 w-full items-center justify-center'>
          {subscriptionPlans.map((sub, i) => (
            <PricingCard key={i} {...sub} pricing={currentPricing} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home

function BgImages() {
  return (
    <div className=''>
      <Image src={bgTop} alt='bg-top' className='absolute top-0 -right-[150px] md:right-0 ' />
      <Image
        src={bgBottom}
        alt='bg-bottom'
        className='absolute bottom-0 left-0'
      />
    </div>
  )
}

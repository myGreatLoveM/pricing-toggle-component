import autoAnimate from '@formkit/auto-animate'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { cn } from '../utils/cn'

type SubscriptionPlan = {
  name: string
  monthlyPrice?: number | null
  annuallyPrice?: number | null
  storage: string
  usersAllowed: number
  sendLimit: string
  pricing: 'Annually' | 'Monthly'
}

function PricingCard({
  name,
  annuallyPrice,
  monthlyPrice,
  storage,
  usersAllowed,
  sendLimit,
  pricing,
}: SubscriptionPlan) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-8 rounded-lg bg-white w-full max-w-[400px] lg:max-w-[300px] px-5 py-4 shadow-lg',
        {
          'bg-gradient-to-b from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] md:scale-110':
            name === 'Professional',
        }
      )}
    >
      <p
        className={cn('font-semibold text-lg text-grayish-Blue', {
          'text-white': name === 'Professional',
        })}
      >
        {name}
      </p>
      <div className='font-bold text-5xl lg:text-6xl  text-dark-Grayish-Blue transition-all'>
        {pricing === 'Annually' ? (
          <p
            className={cn('flex items-center gap-2', {
              'text-white': name === 'Professional',
            })}
          >
            <span className='text-3xl'> $ </span> {annuallyPrice}
          </p>
        ) : (
          <p className='flex items-center gap-2'>
            <span className='text-3xl'> $ </span> {monthlyPrice}
          </p>
        )}
      </div>
      <section className='flex flex-col items-center gap-3 text-grayish-Blue text-sm font-semibold  w-full'>
        <hr className='w-full  bg-light-grayish-blue' />
        <p className={cn({ 'text-white': name === 'Professional' })}>
          {storage} Storage
        </p>
        <hr className='w-full  bg-very-light-grayish-blue' />
        <p className={cn({ 'text-white': name === 'Professional' })}>
          {usersAllowed} Users Allowed
        </p>
        <hr className='w-full  bg-very-light-grayish-blue' />
        <p className={cn({ 'text-white': name === 'Professional' })}>
          Send up to {sendLimit}
        </p>
        <hr className='w-full bg-very-light-grayish-blue' />
      </section>
      <button
        className={cn(
          'bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] w-full py-2 px-3 rounded-md text-white text-sm font-medium tracking-wider border border-white hover:border hover:border-[hsl(237,63%,64%)] hover:from-white hover:to-white hover:text-[hsl(237,63%,64%)] transition-all',
          {
            'from-white to-white text-[hsl(237,63%,64%)]  hover:text-white hover:border-white hover:from-[hsl(236,72%,79%)] hover:to-[hsl(237,63%,64%)] hover:bg-inherit':
              name === 'Professional',
          }
        )}
      >
        LEARN MORE
      </button>
    </div>
  )
}

export default PricingCard

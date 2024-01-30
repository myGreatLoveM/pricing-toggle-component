import { useAutoAnimate } from '@formkit/auto-animate/react'
import clsx from 'clsx'

type Props = {
  pricing: 'Annually' | 'Monthly'
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function ToggleButton({ pricing, onClick }: Props) {
  const [animationParent] = useAutoAnimate()

  return (
    <button
      onClick={onClick}
      className='w-12 h-6 rounded-full flex items-center px-1 bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)]'
      ref={animationParent}
    >
      <div
        className={clsx('h-4 w-4 bg-white rounded-full transition-all', {
          'ml-auto': pricing === 'Monthly',
        })}
      />
    </button>
  )
}

export default ToggleButton

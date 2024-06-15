import { MovingBorderButton } from '@/components/ui'

export const HeroSection = () => {
	return (
		<section className='flex flex-col-reverse gap-24 lg:flex-row lg:gap-0 items-center min-h-[60vh] justify-between'>
			<div className='space-y-10 text-center lg:text-start'>
				<h1 className='text-4xl lg:text-7xl font-bold'>
					Nice to meet you 👋 <br />
					<span className='underline underline-offset-8 decoration-green-500'>
						I&apos;m Oleksandr!{' '}
					</span>
				</h1>
				<p className='md:w-96 text-lg text-gray-300'>
					Based in Uzhhorod/Lviv, I&apos;m a FullStack Developer passionate about
					building a modern web application that users love.
				</p>
			</div>
			<div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
				<div className='flex gap-3 translate-x-8'>
					<div className='w-32 h-32 rounded-2xl bg-green-500'></div>
					<div className='w-32 h-32 rounded-full bg-indigo-500'></div>
				</div>
				<div className='flex gap-3 -translate-x-8'>
					<div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
					<div className='w-32 h-32 rounded-full bg-green-500'></div>
				</div>
				<div className='glow absolute top-[40%] right-1/2 -z-10'></div>
				<MovingBorderButton borderRadius='0.5rem' className='p-3 font-semibold'>
					<p>Available to Work 📢</p>
				</MovingBorderButton>
			</div>
		</section>
	)
}

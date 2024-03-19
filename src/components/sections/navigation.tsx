import { contacts } from '@/utils/contacts'
import Link from 'next/link'

export const NavigationSection = () => {
	return (
		<nav className='py-10 flex justify-between items-center'>
			<h2 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
				{' '}
				m4xx1k 👨🏼‍💻{' '}
			</h2>
			<ul className='flex gap-4 items-center'>
				{contacts.map(social => (
					<li key={social.title}>
						<Link href={social.link} aria-label={social.title} target='_blank'>
							<social.Icon className='w-5 h-5 hover:scale-125 transition-all duration-200' />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

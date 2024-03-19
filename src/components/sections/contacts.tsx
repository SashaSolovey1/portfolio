import { contacts } from '@/utils/contacts'
import Link from 'next/link'
import { BackgroundGradient, Title } from '../ui'

export const ContactsSection = () => {
	return (
		<section className='max-w-7xl mx-auto w-full my-10'>
			<Title text='Contacts 📞' className='mx-auto w-fit -rotate-6' />
			<ul className='flex flex-wrap gap-4 justify-center my-8'>
				{contacts.map((contact, index) => (
					<BackgroundGradient
						key={index}
						className='flex items-center justify-center'
					>
						<Link
							href={contact.link}
							target='_blank'
							className='w-64 h-20 bg-black rounded-3xl flex items-center justify-center gap-4'
						>
							<contact.Icon className='w-12 h-12' />
							<h2 className='text-2xl font-semibold'>{contact.title}</h2>
						</Link>
					</BackgroundGradient>
				))}
			</ul>
		</section>
	)
}

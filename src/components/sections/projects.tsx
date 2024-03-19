import { DirectionAwareHover, Title } from '@/components/ui'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { IconType } from 'react-icons'
import {
	SiExpress,
	SiMaterialdesign,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

export const ProjectsSection = () => {
	return (
		<section className='max-w-7xl mx-auto w-full py-10 px-5 sm-5'>
			<Title text='Projects 🎨' className='mx-auto w-fit rotate-6' />
			<ul className='flex flex-wrap justify-center items-center gap-4 mt-10'>
				{projects.map((project, index) => (
					<li
						className={cn(
							'p-4 rounded-md md:w-5/12 h-auto hover:rotate-0 transition-all duration-500',
							index % 2 === 0 ? ' -rotate-1' : ' rotate-1',
							project.background
						)}
						key={index}
					>
						<Link href={project.link} target='_blank'>
							<DirectionAwareHover
								imageUrl={project.image}
								className='w-full space-y-5'
							>
								<h2 className='text-xl font-semibold'>{project.title}</h2>
								<ul className='flex gap-2 pl-2'>
									{project.tech.map((Icon, i) => (
										<Icon key={i} className='w-4 h-4' />
									))}
								</ul>
								<ul className='hidden md:block text-xs space-y-1 bg-black/80 p-1 rounded-sm max-w-[90%] mt-2'>
									{project.features.map((text, i) => (
										<li className={''} key={text}>
											💡 {text}
										</li>
									))}
								</ul>
							</DirectionAwareHover>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

const projects: Project[] = [
	{
		title: 'E-learning platform',
		tech: [SiReact, SiRedux, SiNodedotjs, SiMongodb, SiExpress],
		image: '/exellence.webp',
		link: 'https://exellence.space',
		features: [
			'Contributed to a web platform for taking courses.',
			'Developed forms for adding courses/lessons and implemented logic for lesson viewing.',
			'Managed video control and question processing.',
			'Used technologies like React, Redux-Toolkit, and SCSS.',
		],
		background: 'bg-violet-500',
	},
	{
		title: 'Crypto investment platform',
		tech: [
			SiReact,
			SiRedux,
			SiNodedotjs,
			SiMongodb,
			SiExpress,
			SiMaterialdesign,
		],
		image: '/cryptoon.webp',
		link: 'https://cryptoon.online',
		features: [
			'Utilized React, Redux-Toolkit, and Material-UI for frontend development.',
			'Developed admin interfaces and managed large data displays using react-window.',
			'Implemented graph visualization using recharts.',
			'Created a cryptocurrency parser that scraped data every 15 minutes.',
		],
		background: 'bg-green-500',
	},
	{
		title: 'Libriland',
		tech: [
			SiTypescript,
			SiNextdotjs,
			SiRedux,
			SiNodedotjs,
			SiMongodb,
			SiExpress,
		],
		image: '/libriland.webp',
		link: 'https://libriland.com',
		features: [
			'Worked on a reading platform, focusing on PDF display and forum development.',
			'Implemented an admin interface for managing books.',
			'Facilitated localization using i18n.',
			'Leveraged technologies such as React, Redux-Toolkit, react-pdf, SCSS, and react-i18n.',
		],
		background: 'bg-blue-500',
	},
	{
		title: 'Project Management System',
		tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress],
		image: '/projects.webp',
		link: '#',
		features: [
			'Developed a web platform IN 3 DAYS for managing university projects using the MERN stack.',
			'Utilized React, Tailwind CSS, React-hook-form, Node.js, Express.js, MongoDB, multer, and jwt.',
			'Received positive feedback for delivering a fully functional project ahead of schedule.',
		],
		background: 'bg-rose-500',
	},
	{
		title: 'Voting Telegram Web App',
		tech: [
			SiTypescript,
			SiNextdotjs,
			SiTailwindcss,
			SiNestjs,
			SiPostgresql,
			SiPrisma,
		],
		image: '/vote.webp',
		link: 'https://t.me/RepostVoteBot',
		features: [
			'Developed a Telegram bot for voting for politicians of Uzbekistan using Nest.js and telegraf.',
			'Created a Backend API using Nest.js, Prisma, and PostgresQL.',
			'Designed an Admin interface using Next.js, tailwind, swr, react-hook-form, react-datetime, and react-dnd.',
			'Developed a Web-App for Telegram using Next.js, swr, and axios.',
		],
		background: 'bg-amber-500',
	},
	{
		title: 'Expense Tracker',
		tech: [
			SiTypescript,
			SiNextdotjs,
			SiTailwindcss,
			SiNestjs,
			SiPostgresql,
			SiPrisma,
		],
		image: '/mymoney.webp',
		link: 'https://mymoney-two.vercel.app/',
		features: [],
		background: 'bg-[#5c85e7]',
	},
]
type Project = {
	title: string
	tech: IconType[]
	image: string
	link: string
	features: string[]
	background: string
}

import { DirectionAwareHover, Title } from '@/components/ui'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { IconType } from 'react-icons'
import {
	SiPhp,
	SiLaravel,
	SiDocker,
	SiSymfony,
	SiWordpress,
	SiJoomla,
	SiVuedotjs,
	SiNodedotjs,
	SiMysql,
	SiRedis,
	SiUbuntu,
} from 'react-icons/si'
import {
	DiYii,
} from 'react-icons/di'
import {
	FaOpencart,
} from 'react-icons/fa'

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
		title: 'Bookmaker site',
		tech: [SiPhp, DiYii, SiRedis, SiUbuntu, SiVuedotjs, SiMysql, SiDocker, SiNodedotjs],
		image: '/tweebet.webp',
		link: '#',
		features: [
			'Developed a simple and user-friendly design. Implemented it,\n' +
			'adapted it for mobile devices, and integrated it with the Yii2\n' +
			'framework.',
			'Created a parser for leagues, events that works via API.',
			'Configured and deployed the project on LNMP (Linux, Nginx, MySQL, PHP).',
		],
		background: 'bg-violet-500',
	},
	{
		title: 'Advertising Service Ad1',
		tech: [SiPhp, DiYii, SiRedis, SiUbuntu, SiVuedotjs, SiMysql, SiDocker, SiNodedotjs],
		image: '/ad1.webp',
		link: 'https://www.ad1.media/',
		features: [
			'Developed a simple and user-friendly design. Implemented it,\n' +
			'adapted it for mobile devices, and integrated it with the Yii2\n' +
			'framework.',
			'Created postback logic.',
			'Solved numerous problems during project development.',
			'Led a squad of 3 during some major tasks.',
		],
		background: 'bg-green-500',
	},
	{
		title: 'Advertising Service Mobivion',
		tech: [SiPhp, DiYii, SiMysql],
		image: '/mobivion.webp',
		link: 'https://mobivion.com',
		features: [
			'Created action and postback logic.',
			'Created API for interacting with AD1',
		],
		background: 'bg-blue-500',
	},
	{
		title: 'Car Import Service',
		tech: [SiPhp, SiWordpress, SiMysql, SiUbuntu],
		image: '/badzinger.webp',
		link: 'https://badzingerauto.com/',
		features: [
			'Created numerous functions and actions for site improvement',
			'Supported project for 6 month',
		],
		background: 'bg-rose-500',
	},
	{
		title: 'Comment app',
		tech: [SiPhp, SiLaravel, SiRedis, SiUbuntu, SiVuedotjs, SiMysql, SiDocker, SiNodedotjs],
		image: '/comment.webp',
		link: '#',
		features: [
			'Developed a simple Laravel + Vue.js app',
			'Implemented websocket for real time communication',
			'Implemented redis for cashing',
			'Configured queues and events for site optimization',
		],
		background: 'bg-amber-500',
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

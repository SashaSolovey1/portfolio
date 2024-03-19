'use client'
import { HoverEffect, Title } from '@/components/ui/'
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

export const SkillsSection = () => {
	return (
		<section className='max-w-5xl mx-auto w-full mt-16 px-8'>
			<Title text='Skills 🔪' className='mx-auto w-min -rotate-6' />
			<HoverEffect items={skills} />
		</section>
	)
}
const skills = [
	{
		text: 'TypeScript',
		Icon: SiTypescript,
	},
	{
		text: 'React',
		Icon: SiReact,
	},
	{
		text: 'Next.js',
		Icon: SiNextdotjs,
	},
	{
		text: 'Redux',
		Icon: SiRedux,
	},
	{
		text: 'TailwindCSS',
		Icon: SiTailwindcss,
	},
	{
		text: 'MaterialUI',
		Icon: SiMaterialdesign,
	},
	{
		text: 'Node.js',
		Icon: SiNodedotjs,
	},
	{
		text: 'Express.js',
		Icon: SiExpress,
	},
	{
		text: 'Nest.js',
		Icon: SiNestjs,
	},
	{
		text: 'MongoDB',
		Icon: SiMongodb,
	},
	{
		text: 'PostgreSQL',
		Icon: SiPostgresql,
	},
	{
		text: 'Prisma',
		Icon: SiPrisma,
	},
]

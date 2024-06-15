'use client'
import { HoverEffect, Title } from '@/components/ui/'
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
		text: 'PHP',
		Icon: SiPhp,
	},
	{
		text: 'Laravel',
		Icon: SiLaravel,
	},
	{
		text: 'Yii2',
		Icon: DiYii,
	},
	{
		text: 'Symfony',
		Icon: SiSymfony,
	},
	{
		text: 'Wordpress',
		Icon: SiWordpress,
	},
	{
		text: 'Opencart',
		Icon: FaOpencart,
	},
	{
		text: 'Joomla',
		Icon: SiJoomla,
	},
	{
		text: 'Vue.js',
		Icon: SiVuedotjs,
	},
	{
		text: 'Node.js',
		Icon: SiNodedotjs,
	},
	{
		text: 'Mysql',
		Icon: SiMysql,
	},
	{
		text: 'Redis',
		Icon: SiRedis,
	},
	{
		text: 'LAMP',
		Icon: SiUbuntu,
	},
	{
		text: 'Docker',
		Icon: SiDocker,
	},
]

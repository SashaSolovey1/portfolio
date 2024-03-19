import { IconType } from 'react-icons'
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si'

export const contacts: Contact[] = [
	{
		title: 'Telegram',
		link: 'https://t.me/m4xx1k',
		Icon: SiTelegram,
	},
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/maksym-fabin-29529b14b/',
		Icon: SiLinkedin,
	},
	{
		title: 'GitHub',
		link: 'https://github.com/m4xx1k',
		Icon: SiGithub,
	},
	{
		title: 'Email',
		link: 'mailto:maxikfabin@gmail.com',
		Icon: MdEmail,
	},
]
type Contact = {
	title: string
	link: string
	Icon: IconType
}

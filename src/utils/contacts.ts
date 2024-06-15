import { IconType } from 'react-icons'
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si'

export const contacts: Contact[] = [
	{
		title: 'Telegram',
		link: 'https://t.me/Sasha_PHP',
		Icon: SiTelegram,
	},
	{
		title: 'LinkedIn',
		link: 'https://www.linkedin.com/in/oleksandr-solovey-02a21a172/',
		Icon: SiLinkedin,
	},
	{
		title: 'GitHub',
		link: 'https://github.com/SashaSolovey1',
		Icon: SiGithub,
	},
	{
		title: 'Email',
		link: 'mailto:solo160103@gmail.com',
		Icon: MdEmail,
	},
]
type Contact = {
	title: string
	link: string
	Icon: IconType
}

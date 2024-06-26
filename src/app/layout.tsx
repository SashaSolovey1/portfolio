import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '600', '500', '700'],
})

export const metadata: Metadata = {
	title: 'Oleksandr Solovei',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark' suppressHydrationWarning>
			<body className={font.className}>{children}</body>
		</html>
	)
}

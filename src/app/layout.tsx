import Sidebar from '@/components/sidebar/Sidebar'
import GlobalProviders from '@/contexts/global-providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tyrads Assessment',
	description: 'Tyrads Assessment',
}

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<GlobalProviders>
					<Sidebar />
					<main className='bg-gray-100 dark:bg-gray-800 sm:pl-[60px] md:pl-24 mt-12 sm:mt-0'>
						{props.children}
					</main>
				</GlobalProviders>
			</body>
		</html>
	)
}

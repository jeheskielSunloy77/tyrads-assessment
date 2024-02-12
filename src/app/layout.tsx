import Sidebar from '@/components/sidebar/Sidebar'
import GlobalProviders from '@/contexts/global-providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './layout.css'

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
					<main className={'layout-wrapper'}>{props.children}</main>
				</GlobalProviders>
			</body>
		</html>
	)
}

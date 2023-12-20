'use client'

import { useLayoutContext } from '@/contexts/layout'
import { useThemeContext } from '@/contexts/theme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ConditionalWrapper from '../conditional-wrapper/ConditionalWrapper'
import Icon, { IconName } from '../icon/Icon'

export default function Sidebar() {
	const { isSidebarExpanded, toggleSidebar } = useLayoutContext()
	const { theme, toggleTheme } = useThemeContext()
	return (
		<>
			<div className='fixed top-0 left-0 z-40 w-full bg-white dark:bg-gray-900 border-b dark:border-b-gray-700 shadow-sm sm:hidden'>
				<button
					onClick={toggleSidebar}
					className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				>
					<svg
						className='w-6 h-6'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							clipRule='evenodd'
							fillRule='evenodd'
							d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
						/>
					</svg>
				</button>
			</div>
			<aside
				className={`block fixed top-0 left-0 z-40 h-screen transition-all ${
					isSidebarExpanded ? 'w-64 shadow-2xl' : 'hidden sm:block'
				}`}
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-900 flex justify-between flex-col'>
					<div>
						<div className='space-y-4'>
							<ConditionalWrapper
								condition={isSidebarExpanded}
								wrapper={(c) => <div className='flex items-center gap-2'>{c}</div>}
							>
								<button
									onClick={toggleSidebar}
									className='flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
								>
									<Icon
										name={isSidebarExpanded ? 'close' : 'menu'}
										className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
									/>
								</button>
								<div className='text-xl font-bold flex items-center justify-center'>
									.S{isSidebarExpanded && 'omething'}
								</div>
							</ConditionalWrapper>
						</div>
						<Link
							href='#'
							className='font-medium mt-8 flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-yellow-300 dark:hover:bg-yellow-500 group bg-yellow-200 dark:bg-yellow-400'
						>
							<Icon
								name='forum-outline'
								className='w-5 h-5 text-yellow-800 transition duration-75 dark:text-yellow-50 group-hover:text-yellow-900 dark:group-hover:text-white'
							/>
							{isSidebarExpanded && <span className='ms-3'>Messaging</span>}
						</Link>
					</div>

					<ul
						className={`space-y-4 font-medium bg-gray-100 dark:bg-gray-800 ${
							isSidebarExpanded ? 'rounded-2xl' : 'rounded-full'
						}`}
					>
						<Item icon='home-outline' label='Home' href='/' />
						<Item icon='bell-outline' label='Notifications' href='/notifications' />
						<Item icon='clock-time-eight-outline' label='Schedule' href='/schedule' />
						<Item icon='account-multiple-outline' label='Teams' href='/teams' />
						<Item icon='wallet-bifold-outline' label='Wallet' href='/wallet' />
						<Item icon='cog-outline' label='Settings' href='/settings' />
					</ul>
					<ul className='space-y-2 font-medium mb-28'>
						<li>
							<Image
								className='mx-auto w-8 h-8 rounded-full border dark:border-gray-800'
								src='https://api.dicebear.com/7.x/open-peeps/png'
								alt='user avatar'
								width={32}
								height={32}
							/>
						</li>
						<li>
							<button
								onClick={toggleTheme}
								className='flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-primary-200 dark:hover:bg-gray-700 group w-full'
							>
								<Icon
									name={theme === 'dark' ? 'weather-sunny' : 'weather-night'}
									className='w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-primary-900 dark:group-hover:text-white'
								/>
								{isSidebarExpanded && <span className='ms-3'>Switch Theme</span>}
							</button>
						</li>
						<li>
							<Link
								href='#'
								className='flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-red-200 dark:hover:bg-red-900 group'
							>
								<Icon
									name='logout'
									className='w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-red-900 dark:group-hover:text-red-50'
								/>
								{isSidebarExpanded && <span className='ms-3'>Logout</span>}
							</Link>
						</li>
					</ul>
				</div>
			</aside>
		</>
	)
}

function Item(props: { label: string; href: string; icon: IconName }) {
	const { isSidebarExpanded } = useLayoutContext()
	const pathname = usePathname()
	return (
		<li>
			<Link
				href={props.href}
				className={`flex items-center p-2 text-gray-900 rounded-full dark:text-white group ${
					pathname === props.href
						? 'bg-blue-200 hover:bg-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500'
						: 'hover:bg-blue-200 dark:hover:bg-blue-400'
				}`}
			>
				<Icon
					name={props.icon}
					className={`w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white`}
				/>
				{isSidebarExpanded && <span className='ms-3'>{props.label}</span>}
			</Link>
		</li>
	)
}

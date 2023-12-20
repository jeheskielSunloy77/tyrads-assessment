'use client'

import { useLayoutContext } from '@/contexts/layout'
import ConditionalWrapper from '../conditional-wrapper/ConditionalWrapper'
import Icon, { IconName } from '../icon/Icon'

export default function Sidebar() {
	const { isSidebarExpanded, toggleSidebar } = useLayoutContext()

	return (
		<>
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
			<aside
				className={`fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
					isSidebarExpanded ? 'w-64' : ''
				}`}
			>
				<div className='h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 flex justify-between flex-col'>
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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
										/>
									</svg>
								</button>
								<div className='text-xl font-bold flex items-center justify-center'>
									.S{isSidebarExpanded && 'omething'}
								</div>
							</ConditionalWrapper>
						</div>
						<a
							href='#'
							className='font-medium mt-8 flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-yellow-300 dark:hover:bg-gray-700 group bg-yellow-200'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-5 h-5 text-yellow-800 transition duration-75 dark:text-gray-400 group-hover:text-yellow-900 dark:group-hover:text-white'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
								/>
							</svg>
							{isSidebarExpanded && <span className='ms-3'>Messaging</span>}
						</a>
					</div>

					<ul
						className={`space-y-4 font-medium bg-gray-100 ${
							isSidebarExpanded ? 'rounded-2xl' : 'rounded-full'
						}`}
					>
						<Item icon='home-outline' label='Home' href='#' isActive={true} />
						<Item
							icon='bell-outline'
							label='Notifications'
							href='#'
							isActive={false}
						/>
						<Item
							icon='clock-time-eight-outline'
							label='Schedule'
							href='#'
							isActive={false}
						/>
						<Item
							icon='account-multiple-outline'
							label='Teams'
							href='#'
							isActive={false}
						/>
						<Item
							icon='wallet-bifold-outline'
							label='Wallet'
							href='#'
							isActive={false}
						/>
						<Item icon='cog-outline' label='Settings' href='#' isActive={false} />
					</ul>
					<ul className='space-y-2 font-medium mb-28'>
						<li>
							<img
								className='mx-auto w-8 h-8 rounded-full'
								src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
								alt='Rounded avatar'
							/>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-red-200 dark:hover:bg-gray-700 group'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-red-900 dark:group-hover:text-white'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
									/>
								</svg>
								{isSidebarExpanded && <span className='ms-3'>Logout</span>}
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</>
	)
}

function Item(props: {
	label: string
	href: string
	isActive: boolean
	icon: IconName
}) {
	const { isSidebarExpanded } = useLayoutContext()
	return (
		<li>
			<a
				href={props.href}
				className={`flex items-center p-2 text-gray-900 rounded-full dark:text-white dark:hover:bg-gray-700 group ${
					props.isActive ? 'bg-blue-200 hover:bg-blue-300' : 'hover:bg-blue-200'
				}`}
			>
				<Icon
					name={props.icon}
					className={`w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}
				/>
				{isSidebarExpanded && <span className='ms-3'>{props.label}</span>}
			</a>
		</li>
	)
}

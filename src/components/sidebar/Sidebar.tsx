'use client'

import { useLayoutContext } from '@/contexts/layout'
import { useThemeContext } from '@/contexts/theme'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ConditionalWrapper from '../conditional-wrapper/ConditionalWrapper'
import Icon, { IconName } from '../icon/Icon'
import './Sidebar.css'

export default function Sidebar() {
	const { isSidebarExpanded, toggleSidebar } = useLayoutContext()
	const { theme, toggleTheme } = useThemeContext()
	return (
		<>
			<div className={'sidebar-toggler shadow-sm'}>
				<button onClick={toggleSidebar}>
					<svg
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
				className={
					isSidebarExpanded
						? 'sidebar-open transition-all shadow-2xl'
						: 'sidebar transition-all'
				}
			>
				<div className={'sidebar-layer'}>
					<div>
						<header className={'sidebar-header space-y-4 '}>
							<ConditionalWrapper
								condition={isSidebarExpanded}
								wrapper={(c) => (
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: 'var(--size-2)',
										}}
									>
										{c}
									</div>
								)}
							>
								<button onClick={toggleSidebar}>
									<Icon name={isSidebarExpanded ? 'close' : 'menu'} />
								</button>
								<h3>.S{isSidebarExpanded && 'omething'}</h3>
							</ConditionalWrapper>
						</header>
						<Link href='#' className={'nav-link-messaging'}>
							<Icon name='forum-outline' />
							{isSidebarExpanded && <span className={'nav-link-text'}>Messaging</span>}
						</Link>
					</div>
					<ul
						className={'main-nav-list space-y-4 '}
						style={{
							borderRadius: isSidebarExpanded
								? 'var(--radius-2xl)'
								: 'var(--radius-full)',
						}}
					>
						<Item icon='home-outline' label='Home' href='/' />
						<Item icon='bell-outline' label='Notifications' href='/notifications' />
						<Item icon='clock-time-eight-outline' label='Schedule' href='/schedule' />
						<Item icon='account-multiple-outline' label='Teams' href='/teams' />
						<Item icon='wallet-bifold-outline' label='Wallet' href='/wallet' />
						<Item icon='cog-outline' label='Settings' href='/settings' />
					</ul>
					<ul className={'bottom-nav-list space-y-4 '}>
						<li>
							<Image
								src='https://api.dicebear.com/7.x/open-peeps/png'
								alt='user avatar'
								width={32}
								height={32}
							/>
						</li>
						<li>
							<button onClick={toggleTheme} className={'nav-link-theme-toggler'}>
								<Icon
									name={theme === 'dark' ? 'weather-sunny' : 'weather-night'}
									className='w-5 h-5 text-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-primary-900 dark:group-hover:text-white'
								/>
								{isSidebarExpanded && (
									<span className={'nav-link-text'}>Switch Theme</span>
								)}
							</button>
						</li>
						<li>
							<Link href='#' className={'nav-link-logout'}>
								<Icon name='logout' />
								{isSidebarExpanded && <span className={'nav-link-text'}>Logout</span>}
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
		<li className={'nav-link-container'}>
			<Link
				href={props.href}
				className={
					pathname === props.href ? 'nav-link-active' : 'nav-link-inactive'
				}
			>
				<Icon name={props.icon} />
				{isSidebarExpanded && (
					<span className={'nav-link-text'}>{props.label}</span>
				)}
			</Link>
		</li>
	)
}

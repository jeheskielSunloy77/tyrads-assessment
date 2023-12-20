import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import BarChart from '@/components/charts/BarChart'
import CustomActiveShapePieChart from '@/components/charts/CustomActiveShapePieChart'
import LineChart from '@/components/charts/LineChart'
import Icon from '@/components/icon/Icon'
import Image from 'next/image'
import Link from 'next/link'

const barchartData = [
	{ date: 'Jan', expenses: 4000, income: 2400 },
	{ date: 'Feb', expenses: 3000, income: 1398 },
	{ date: 'Mar', expenses: 2000, income: 9800 },
	{ date: 'Apr', expenses: 2780, income: 3908 },
	{ date: 'May', expenses: 1890, income: 4800 },
	{ date: 'Jun', expenses: 2390, income: 3800 },
]

const balanceStatistics = barchartData.map((item) => {
	const balance = item.income - item.expenses
	return { date: item.date, balance }
})

const percantageDifferenceFromLastMonth: number =
	(balanceStatistics[balanceStatistics.length - 1].balance /
		balanceStatistics[balanceStatistics.length - 2].balance) *
	100

const pieChartData = [
	{ name: 'Done', value: 30, fill: '#8b5cf6' },
	{ name: 'In progress', value: 20, fill: '#f59e0b' },
	{ name: 'Todo', value: 50, fill: '#ef4444' },
]

export default function Home() {
	return (
		<div className='relative'>
			<div className='pr-[502px] py-10 space-y-6'>
				<header className='flex items-center justify-between'>
					<div>
						<h3 className='font-bold text-2xl'>Hello, John .D!</h3>
						<p className='text-sm text-gray-700'>
							View and control your finances here!
						</p>
					</div>
					<button className='p-1.5 rounded-full bg-white'>
						<Icon name='magnify' />
					</button>
				</header>
				<div className='grid grid-cols-2 gap-6'>
					<div className='p-4 rounded-2xl bg-white'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Balance statistics</h5>
							<button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-2'>
								Filter
								<Icon name='chevron-up' className='w-5 h-5 rotate-180' />
							</button>
						</div>
						<div className='grid grid-cols-[30%,70%]'>
							<div className='space-y-5'>
								<div className='text-4xl font-bold'>$464</div>
								<div className='flex items-center gap-2 border-b pb-2'>
									<Image
										src='/images/balance-coins.png'
										alt='balance coins'
										width={40}
										height={40}
										className='w-10 h-10'
									/>
									Your total balance
								</div>
								<div className='grid grid-flow-col items-center gap-1'>
									<div>
										<LineChart
											data={balanceStatistics}
											xAxisDataKey='date'
											lines={[
												{
													dataKey: 'balance',
													stroke: '#8b5cf6',
												},
											]}
											wrapperHeight='50px'
										/>
									</div>
									<div className='rounded-full border border-gray-900'>
										<Icon name='arrow-up-thin' className='w-3 h-3' />
									</div>
									<div className='text-xs'>
										{Math.round(percantageDifferenceFromLastMonth)}%
									</div>
								</div>
								<p className='text-sm text-gray-400 dark:text-gray-600'>
									Always see your earnings updates!
								</p>
							</div>

							<BarChart
								data={barchartData}
								xAxisDataKey='date'
								wrapperHeight='280px'
								bars={[
									{
										dataKey: 'expenses',
										fill: '#8b5cf6',
									},
									{
										dataKey: 'income',
										fill: '#c4b5fd',
									},
								]}
							/>
						</div>
					</div>
					<div
						style={{
							backgroundColor: 'rgb(161, 161, 170)',
							backgroundImage:
								'radial-gradient(at 96% 68%, rgb(165, 180, 252) 0, transparent 72%), radial-gradient(at 63% 37%, rgb(216, 180, 254) 0, transparent 78%), radial-gradient(at 68% 4%, rgb(167, 139, 250) 0, transparent 87%), radial-gradient(at 53% 9%, rgb(244, 244, 245) 0, transparent 2%), radial-gradient(at 72% 40%, rgb(127, 29, 29) 0, transparent 21%), radial-gradient(at 16% 80%, rgb(253, 164, 175) 0, transparent 96%)',
						}}
						className='p-4 rounded-2xl flex flex-col justify-between text-white'
					>
						<div className='flex items-center justify-between text-3xl font-bold'>
							<h2>S.</h2>
							<h2>VISA</h2>
						</div>
						<div className='flex items-center justify-center'>
							<Image
								src='/icons/credit-card-image.svg'
								alt='credit card image'
								width={300}
								height={200}
							/>
						</div>
						<div className='flex items-end justify-between font-semibold'>
							<div>
								<div>****0812938</div>
								<div>John Demon</div>
							</div>
							<div>08/12</div>
						</div>
					</div>
					<div className='col-span-2 grid grid-cols-2 rounded-2xl bg-white'>
						<div className='space-y-3 border-r p-4'>
							<h6 className='font-semibold text-sm'>List of items to buy</h6>
							<div className='flex items-center justify-between w-1/2'>
								<div>
									<div className='text-xl font-semibold'>02:00</div>
									<p className='text-xs text-gray-400'>Sat, Auguest 28</p>
								</div>
								<Icon name='chevron-up' className='w-6 h-6 rotate-90' />
								<div>
									<div className='text-xl font-semibold'>02:00</div>
									<p className='text-xs text-gray-400'>Sat, Auguest 28</p>
								</div>
							</div>
							<div className='flex items-center justify-between'>
								<div className='text-sm'>
									<span className='text-gray-400'>0/3 </span>
									<span className='font-semibold'>Shopping list</span>
								</div>
								<ButtonIcon size='small'>
									<Icon name='plus' className='w-6 h-6 text-black' />
									<span className='text-black font-semibold'>Add an item</span>
								</ButtonIcon>
							</div>
							<div className='grid grid-cols-2 gap-2'>
								<ShoppingListItem name='Milk' isChecked />
								<ShoppingListItem name='Mackbook' />
								<ShoppingListItem name='Comic book' />
								<ShoppingListItem name='Basket of eggs' isChecked />
							</div>
						</div>
						<div className='space-y-3 p-4 border-l'>
							<h6 className='font-semibold'>Ester Howard</h6>
							<div className='flex items-center gap-2 justify-end'>
								<div className='bg-primary-500 text-white px-4 py-2 rounded-t-lg rounded-bl-lg'>
									Are you ready?
								</div>
								<Image
									src='https://api.dicebear.com/7.x/open-peeps/png'
									alt='chat profile image'
									className='w-10 h-10 rounded-full border dark:border-gray-800'
									width={40}
									height={40}
								/>
							</div>
							<div className='flex items-center gap-2'>
								<Image
									src='https://api.dicebear.com/7.x/open-peeps/png?seed=344'
									alt='chat profile image'
									className='w-10 h-10 rounded-full border dark:border-gray-800'
									width={40}
									height={40}
								/>
								<div className='bg-gray-100 px-4 py-2 rounded-t-lg rounded-br-lg'>
									Yes, lets go!
								</div>
							</div>
							<div className='relative'>
								<textarea
									name='chat-message'
									rows={3}
									placeholder='Type your message'
									className='bg-gray-100 w-full rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:focus:ring-primary-600'
								></textarea>
								<ButtonIcon size='small' className='absolute bottom-3 left-2'>
									<Icon
										className='w-6 h-6 text-black dark:text-white'
										name='emoticon-outline'
									/>
								</ButtonIcon>
								<ButtonIcon size='small' className='absolute bottom-3 left-10'>
									<Icon
										className='w-6 h-6 text-black dark:text-white'
										name='paperclip'
									/>
								</ButtonIcon>
								<Button size='small' className='absolute bottom-3 right-2'>
									Send now
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-[0.65fr,0.35fr] gap-6'>
					<div className='p-4 rounded-2xl bg-white space-y-4'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Last transactions</h5>
							<div className='space-x-4'>
								<Link href='#' className='text-gray-500 underline'>
									Newest
								</Link>
								<Link href='#' className='text-gray-500 hover:underline'>
									Oldest
								</Link>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='flex items-center justify-between border-b py-2'>
								<div className='flex items-center gap-2'>
									<Image
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt='transaction image'
										width={40}
										height={40}
										className='w-10 h-10 rounded-full'
									/>
									<div>
										<p className='font-semibold'>Bressie Cooper</p>
										<p className='text-xs text-gray-400'>02 July, 2023</p>
									</div>
								</div>
								<div className='flex items-center gap-6'>
									<div className='flex items-center gap-2'>
										<p className='font-semibold'>+ $1,000</p>
									</div>
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' />
									</ButtonIcon>
								</div>
							</div>
							<div className='flex items-center justify-between border-b py-2'>
								<div className='flex items-center gap-2'>
									<Image
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt='transaction image'
										width={40}
										height={40}
										className='w-10 h-10 rounded-full'
									/>
									<div>
										<p className='font-semibold'>Bressie Cooper</p>
										<p className='text-xs text-gray-400'>02 July, 2023</p>
									</div>
								</div>
								<div className='flex items-center gap-6'>
									<div className='flex items-center gap-2'>
										<p className='font-semibold'>+ $1,000</p>
									</div>
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' />
									</ButtonIcon>
								</div>
							</div>
							<div className='flex items-center justify-between border-b py-2'>
								<div className='flex items-center gap-2'>
									<Image
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt='transaction image'
										width={40}
										height={40}
										className='w-10 h-10 rounded-full'
									/>
									<div>
										<p className='font-semibold'>Bressie Cooper</p>
										<p className='text-xs text-gray-400'>02 July, 2023</p>
									</div>
								</div>
								<div className='flex items-center gap-6'>
									<div className='flex items-center gap-2'>
										<p className='font-semibold'>+ $1,000</p>
									</div>
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' />
									</ButtonIcon>
								</div>
							</div>
							<div className='flex items-center justify-between py-2'>
								<div className='flex items-center gap-2'>
									<Image
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt='transaction image'
										width={40}
										height={40}
										className='w-10 h-10 rounded-full'
									/>
									<div>
										<p className='font-semibold'>Bressie Cooper</p>
										<p className='text-xs text-gray-400'>02 July, 2023</p>
									</div>
								</div>
								<div className='flex items-center gap-6'>
									<div className='flex items-center gap-2'>
										<p className='font-semibold'>+ $1,000</p>
									</div>
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' />
									</ButtonIcon>
								</div>
							</div>
						</div>
					</div>
					<div className='p-4 rounded-2xl bg-white'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Analitics</h5>
							<ButtonIcon size='small'>
								<Icon name='dots-vertical' />
							</ButtonIcon>
						</div>

						<CustomActiveShapePieChart data={pieChartData} dataKey='value' />
					</div>
				</div>
			</div>
			<div className='bg-white space-y-6 py-10 px-8 fixed right-0 top-0 h-screen'>
				<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
					<h5 className='font-semibold'>Expenses and Income</h5>
					<div className='flex items-center justify-between'>
						<div>
							<p className='text-sm'>Expenses</p>
							<p className='text-xl'>75%</p>
							<p className='text-xs text-gray-600 dark:text-gray-400'>5,812</p>
						</div>
						<div className='flex items-center flex-col text-sm'>
							<div className='w-[1px] h-4 bg-black'></div>
							vs
							<div className='w-[1px] h-4 bg-black'></div>
						</div>
						<div>
							<p className='text-sm'>Income</p>
							<p className='text-xl'>40%</p>
							<p className='text-xs text-gray-600 dark:text-gray-400'>2,456</p>
						</div>
					</div>
					<div className='grid grid-cols-[70%,30%] gap-1 h-4'>
						<div className='bg-primary-500 rounded-sm' />
						<div className='bg-secondary-500 rounded-sm' />
					</div>
				</div>
				<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
					<div className='flex items-center justify-between'>
						<h5 className='font-semibold'>Latest Spending</h5>
						<ButtonIcon size='small'>
							<Icon name='dots-vertical' />
						</ButtonIcon>
					</div>
					<div className='flex items-center gap-4 border-b py-3'>
						<Image
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt='concert-ticket-image'
							width={48}
							height={48}
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<div className='flex items-center gap-4 border-b py-3'>
						<Image
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt='concert-ticket-image'
							width={48}
							height={48}
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<div className='flex items-center gap-4 pt-3'>
						<Image
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt='concert-ticket-image'
							width={48}
							height={48}
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<Link
						href='#'
						className='flex items-center gap-2 justify-center text-sm text-primary-600 hover:underline'
					>
						View all <Icon name='arrow-up-thin' className='w-5 h-5 rotate-90' />
					</Link>
				</div>
				<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
					<h6 className='text-center text-sm'>Go to premium</h6>
					<Image
						src='/icons/crown.svg'
						alt='go to premium image'
						className='w-20 h-20 mx-auto'
						height={80}
						width={80}
					/>
					<div>
						<h5 className='font-semibold'>Need more features?</h5>
						<p className='text-sm text-gray-400'>
							Upgrade to a premium account to access more features.
						</p>
					</div>
					<Button className='w-full'>Get Now!</Button>
				</div>
			</div>
		</div>
	)
}

function ShoppingListItem(props: { name: string; isChecked?: boolean }) {
	return (
		<div className='px-4 py-3 rounded-md flex items-center justify-between bg-gray-100'>
			<div className='flex items-center'>
				<input
					checked={props.isChecked}
					id={`shopping-list-${props.name}`}
					type='checkbox'
					value=''
					className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
				/>
				<label
					htmlFor={`shopping-list-${props.name}`}
					className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					{props.name}
				</label>
			</div>
			<ButtonIcon size='small'>
				<Icon name='dots-vertical' className='w-5 h-5' />
			</ButtonIcon>
		</div>
	)
}

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import BarChart from '@/components/charts/BarChart'
import Icon from '@/components/icon/Icon'

const barchartData = [
	{ date: 'Jan', expenses: 4000, income: 2400 },
	{ date: 'Feb', expenses: 3000, income: 1398 },
	{ date: 'Mar', expenses: 2000, income: 9800 },
	{ date: 'Apr', expenses: 2780, income: 3908 },
	{ date: 'May', expenses: 1890, income: 4800 },
	{ date: 'Jun', expenses: 2390, income: 3800 },
	{ date: 'Jul', expenses: 3490, income: 4300 },
	{ date: 'Aug', expenses: 4000, income: 2400 },
	{ date: 'Sep', expenses: 3000, income: 1398 },
	{ date: 'Oct', expenses: 2000, income: 9800 },
	{ date: 'Nov', expenses: 2780, income: 3908 },
	{ date: 'Dec', expenses: 1890, income: 4800 },
]
const data = [
	{ date: 'Jan', value: 2400 },
	{ date: 'Feb', value: 1398 },
	{ date: 'Mar', value: 9800 },
	{ date: 'Apr', value: 3908 },
	{ date: 'May', value: 4800 },
	{ date: 'Jun', value: 3800 },
	{ date: 'Jul', value: 4300 },
	{ date: 'Aug', value: 2400 },
	{ date: 'Sep', value: 1398 },
	{ date: 'Oct', value: 9800 },
	{ date: 'Nov', value: 3908 },
	{ date: 'Dec', value: 4800 },
]

export default function Home() {
	return (
		<div className='grid grid-cols-[75%,25%]'>
			<div className='px-8 py-10 space-y-6'>
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
					<div className='p-4 rounded-lg bg-white'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Balance statistics</h5>
							<button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-2'>
								Filter
								<Icon name='chevron-up' className='w-5 h-5 rotate-180' />
							</button>
						</div>
						<div className='flex items-center'>
							<div>
								<div className='text-2xl font-bold'>$464</div>
								<div className='flex items-center gap-2'>
									<img
										src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmWAglW62ogPOPt2svn945e3FFbNGz_8EHj4VrOBZPw&s'
										alt=''
										className='w-10 h-10'
									/>
									Your total balance
								</div>
							</div>

							<BarChart
								data={data}
								xAxisDataKey='date'
								bars={[
									{
										dataKey: 'value',
										fill: '#6B7280',
									},
								]}
							/>
						</div>
					</div>
					<div className='col-span-2 grid grid-cols-2 p-4 rounded-lg bg-white gap-4'>
						<div className='space-y-3'>
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
						<div className='space-y-3'>
							<h6 className='font-semibold'>Ester Howard</h6>
							<div className='flex items-center gap-2 justify-end'>
								<div className='bg-primary-500 text-white px-4 py-2 rounded-t-lg rounded-bl-lg'>
									Are you ready?
								</div>
								<img
									src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
									alt=''
									className='w-10 h-10 rounded-full'
								/>
							</div>
							<div className='flex items-center gap-2'>
								<img
									src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
									alt=''
									className='w-10 h-10 rounded-full'
								/>
								<div className='bg-gray-100 px-4 py-2 rounded-t-lg rounded-br-lg'>
									Are you ready?
								</div>
							</div>
							<textarea
								name='chat-message'
								rows={3}
								placeholder='Type your message'
								className='bg-gray-100 w-full rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:focus:ring-primary-600'
							></textarea>
						</div>
					</div>
					<div className='p-4 rounded-lg bg-white space-y-4'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Last transactions</h5>
							<div className='space-x-4'>
								<a href='#' className='text-gray-500 underline'>
									Newest
								</a>
								<a href='#' className='text-gray-500 hover:underline'>
									Oldest
								</a>
							</div>
						</div>
						<div className='space-y-4'>
							<div className='flex items-center justify-between border-b py-2'>
								<div className='flex items-center gap-2'>
									<img
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt=''
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
									<img
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt=''
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
									<img
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt=''
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
									<img
										src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
										alt=''
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
				</div>
			</div>
			<div className='bg-white space-y-6 py-10 px-8'>
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
						<img
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt=''
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<div className='flex items-center gap-4 border-b py-3'>
						<img
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt=''
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<div className='flex items-center gap-4 pt-3'>
						<img
							src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
							alt=''
							className='w-12 h-12 rounded-full'
						/>
						<div>
							<p className='font-semibold leading-4'>Concert Ticket</p>
							<span className='text-xs text-gray-500'>May 12, 2021 at 8:00 PM</span>
						</div>
					</div>
					<a
						href='#'
						className='flex items-center gap-2 justify-center text-sm text-primary-600 hover:underline'
					>
						View all <Icon name='arrow-up-thin' className='w-5 h-5 rotate-90' />
					</a>
				</div>
				<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
					<h6 className='text-center text-sm'>Go to premium</h6>
					<img
						src='https://www.mockupworld.co/wp-content/uploads/dynamic/2022/08/free-concert-tickert-mockup-psd-536x0-c-default.jpg'
						alt=''
						className='w-20 h-20'
					/>
					<div>
						<h5 className='font-semibold'>Need more features?</h5>
						<p className='text-sm text-gray-400'>
							Upgrade to a premium account to access more features.
						</p>
					</div>
					<button
						type='button'
						className='w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
					>
						Get Now!
					</button>
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

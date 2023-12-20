import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import CustomActiveShapePieChart from '@/components/charts/CustomActiveShapePieChart'
import Icon from '@/components/icon/Icon'
import {
	balanceDiffFromLastMonth,
	chatMessages,
	financesData,
	shoppingList,
	thisMonthExpensesPercentage,
	todosData,
	transactions,
} from '@/libs/db/mock-data'
import Image from 'next/image'
import BalanceStatistics from './index-page-partials/balance-statistics/BalanceStatistics'
import ChatCard from './index-page-partials/chat-card/ChatCard'
import CreditCard from './index-page-partials/credit-card/CreditCard'
import ItemsToBuyCard from './index-page-partials/items-to-buy-card/ItemsToBuyCard'
import LatestSpendingCard from './index-page-partials/latest-spending-card/LatestSpendingCard'
import LatestTransactionsCard from './index-page-partials/latest-transactions-card/LatestTransactionsCard'

export default function Home() {
	return (
		<div className='relative'>
			<div className='md:mr-[502px] py-6 md:py-10 space-y-6 md:px-0 px-4'>
				<header className='flex items-center justify-between'>
					<div>
						<h3 className='font-bold text-2xl'>Hello, John .D!</h3>
						<p className='text-sm text-gray-700 dark:text-gray-300'>
							View and control your finances here!
						</p>
					</div>
					<button className='p-1.5 rounded-full bg-white dark:bg-gray-900'>
						<Icon name='magnify' />
					</button>
				</header>
				<div className='grid md:grid-cols-2 gap-6 '>
					<BalanceStatistics
						financesData={financesData}
						balanceDiffFromLastMonth={balanceDiffFromLastMonth}
					/>
					<CreditCard />
					<div className='md:col-span-2 md:grid grid-cols-2 rounded-2xl bg-white dark:bg-gray-900'>
						<ItemsToBuyCard shoppingList={shoppingList} />
						<ChatCard chatMessages={chatMessages} />
					</div>
				</div>
				<div className='grid md:grid-cols-[0.65fr,0.35fr] gap-6'>
					<LatestTransactionsCard transactions={transactions} />
					<div className='p-4 rounded-2xl bg-white dark:bg-gray-900'>
						<div className='flex items-center justify-between'>
							<h5 className='font-semibold'>Analitics</h5>
							<ButtonIcon size='small'>
								<Icon name='dots-vertical' />
							</ButtonIcon>
						</div>

						<CustomActiveShapePieChart data={todosData} dataKey='value' />
					</div>
				</div>
			</div>
			<div className='bg-white dark:bg-gray-900 space-y-6 py-10 px-4 md:px-8 md:fixed right-0 top-0 md:h-screen'>
				<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
					<h5 className='font-semibold'>Expenses and Income</h5>
					<div className='flex items-center justify-between'>
						<div>
							<p className='text-sm'>Expenses</p>
							<p className='text-xl'>{thisMonthExpensesPercentage}%</p>
							<p className='text-xs text-gray-600 dark:text-gray-400'>5,812</p>
						</div>
						<div className='flex items-center flex-col text-sm'>
							<div className='w-[1px] h-4 bg-black'></div>
							vs
							<div className='w-[1px] h-4 bg-black'></div>
						</div>
						<div>
							<p className='text-sm'>Income</p>
							<p className='text-xl'>{100 - thisMonthExpensesPercentage}%</p>
							<p className='text-xs text-gray-600 dark:text-gray-400'>2,456</p>
						</div>
					</div>
					<div
						className='grid gap-1 h-4'
						style={{
							gridTemplateColumns: `${thisMonthExpensesPercentage}% ${
								100 - thisMonthExpensesPercentage
							}%`,
						}}
					>
						<div className='bg-primary-500 rounded-sm' />
						<div className='bg-secondary-500 rounded-sm' />
					</div>
				</div>
				<LatestSpendingCard transactions={transactions} />
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

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import PieChart from '@/components/charts/pie-chart/PieChart'
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
import './page.css'

export default function Home() {
	return (
		<div style={{ position: 'relative' }}>
			<div className={'center-container space-y-6'}>
				<header className={'page-header'}>
					<div>
						<h3>Hello, John .D!</h3>
						<p>View and control your finances here!</p>
					</div>
					<button>
						<Icon name='magnify' />
					</button>
				</header>
				<div className={'top-cards-container'}>
					<BalanceStatistics
						financesData={financesData}
						balanceDiffFromLastMonth={balanceDiffFromLastMonth}
					/>
					<CreditCard />
					<div className={'mid-cards-container'}>
						<ItemsToBuyCard shoppingList={shoppingList} />
						<ChatCard chatMessages={chatMessages} />
					</div>
				</div>
				<div className={'bottom-cards-container'}>
					<LatestTransactionsCard transactions={transactions} />
					<div className={'analitics-card'}>
						<header>
							<h5>Analitics</h5>
							<ButtonIcon size='small'>
								<Icon name='dots-vertical' />
							</ButtonIcon>
						</header>
						<PieChart data={todosData} dataKey='value' />
					</div>
				</div>
			</div>
			<div className={'right-side-container space-y-6'}>
				<div className={'expenses-income-card space-y-3'}>
					<h5>Expenses and Income</h5>
					<div className={'expenses-income-card-wrapper'}>
						<div>
							<h6>Expenses</h6>
							<p>{thisMonthExpensesPercentage}%</p>
							<span>5,812</span>
						</div>
						<div className={'expenses-income-vs'}>
							<div></div>
							vs
							<div></div>
						</div>
						<div>
							<h6>Income</h6>
							<p>{100 - thisMonthExpensesPercentage}%</p>
							<span>2,456</span>
						</div>
					</div>
					<div
						className={'expenses-income-bars'}
						style={{
							gridTemplateColumns: `${thisMonthExpensesPercentage}% ${
								100 - thisMonthExpensesPercentage
							}%`,
						}}
					>
						<div />
						<div />
					</div>
				</div>
				<LatestSpendingCard transactions={transactions} />
				<div className={'premium-offer-card space-y-3'}>
					<h6>Go to premium</h6>
					<Image
						src='/icons/crown.svg'
						alt='go to premium image'
						height={80}
						width={80}
					/>
					<div>
						<h5>Need more features?</h5>
						<p> Upgrade to a premium account to access more features.</p>
					</div>
					<Button>Get Now!</Button>
				</div>
			</div>
		</div>
	)
}

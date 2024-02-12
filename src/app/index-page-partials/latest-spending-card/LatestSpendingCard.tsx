'use client'
import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { Transaction } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import './LatestSpendingCard.css'
const Dropdown = dynamic(() => import('@/components/dropdown/Dropdown'), {
	ssr: false,
})

export default function LatestSpendingCard(props: {
	transactions: Transaction[]
}) {
	const [isViewAll, setIsViewAll] = useState(false)
	const [isShowingAmount, setIsShowingAmount] = useState(false)
	const expenses = props.transactions.filter(
		(transaction) => transaction.type === 'expense'
	)
	const slicedExpenses = isViewAll ? expenses : expenses.slice(0, 3)

	return (
		<div className={'latest-spending-card space-y-3'}>
			<header>
				<h5>Latest Spending</h5>
				<Dropdown
					button={
						<ButtonIcon size='small'>
							<Icon name='dots-vertical' className='w-5 h-5' />
						</ButtonIcon>
					}
				>
					<DropdownButton onClick={() => setIsShowingAmount((prev) => !prev)}>
						{isShowingAmount ? (
							<>
								<Icon name='eye-off-outline' /> Hide Amount
							</>
						) : (
							<>
								<Icon name='eye-outline' /> Show Amount
							</>
						)}
					</DropdownButton>
				</Dropdown>
			</header>
			{slicedExpenses.map((transaction, i) => (
				<div key={`${transaction.name}-${i}`} className={'spending-transaction'}>
					<Image
						src={transaction.image}
						alt='concert-ticket-image'
						width={48}
						height={48}
					/>
					<div>
						<h5>{transaction.name}</h5>
						{isShowingAmount && (
							<h6>
								${transaction.amount} {'  '}
							</h6>
						)}
						<p>
							{dayjs(transaction.date).format('DD MMMM, YYYY')} at{' '}
							{dayjs(transaction.date).format('hh:mm A')}
						</p>
					</div>
				</div>
			))}
			<button
				onClick={() => setIsViewAll((prev) => !prev)}
				className={'view-all-spendings'}
			>
				View {isViewAll ? 'less' : 'all'}
				<Icon
					name='arrow-up-thin'
					style={{ transform: isViewAll ? '' : 'rotate(-180deg)' }}
				/>
			</button>
		</div>
	)
}

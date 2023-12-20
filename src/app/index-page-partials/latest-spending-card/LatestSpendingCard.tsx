'use client'
import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { Transaction } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'

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
		<div className='p-4 border dark:border-gray-800 rounded-xl space-y-3'>
			<div className='flex items-center justify-between'>
				<h5 className='font-semibold'>Latest Spending</h5>
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
			</div>
			{slicedExpenses.map((transaction, i) => (
				<div
					key={`${transaction.name}-${i}`}
					className='flex items-center gap-4 border-b py-3'
				>
					<Image
						src={transaction.image}
						alt='concert-ticket-image'
						width={48}
						height={48}
						className='w-12 h-12 rounded-full'
					/>
					<div>
						<p className='font-semibold'>{transaction.name}</p>
						{isShowingAmount && (
							<div className='text-xs'>
								${transaction.amount} {'  '}
							</div>
						)}
						<div className='text-xs text-gray-500'>
							{dayjs(transaction.date).format('DD MMMM, YYYY')} at{' '}
							{dayjs(transaction.date).format('hh:mm A')}
						</div>
					</div>
				</div>
			))}
			<button
				onClick={() => setIsViewAll((prev) => !prev)}
				className='flex items-center gap-2 justify-center text-sm text-primary-600 hover:underline mx-auto'
			>
				View {isViewAll ? 'less' : 'all'}
				<Icon
					name='arrow-up-thin'
					className={`w-5 h-5 ${isViewAll ? '-rotate-90' : 'rotate-90'}`}
				/>
			</button>
		</div>
	)
}

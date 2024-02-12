'use client'

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { Transaction } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import './LatestTransactionsCard.css'
const Dropdown = dynamic(() => import('@/components/dropdown/Dropdown'), {
	ssr: false,
})

export default function LatestTransactionsCard(props: {
	transactions: Transaction[]
}) {
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
	const [transactions, setTransactions] = useState(props.transactions)
	return (
		<div className={'latest-transactions-card space-y-4'}>
			<header>
				<h5>Latest transactions</h5>
				<div className={'transaction-sorter space-x-4'}>
					<button
						style={{
							textDecoration: sortDir === 'desc' ? 'underline' : 'none',
						}}
						onClick={() => {
							setSortDir('desc')
							setTransactions(props.transactions)
						}}
					>
						Newest
					</button>
					<button
						style={{
							textDecoration: sortDir === 'asc' ? 'underline' : 'none',
						}}
						onClick={() => {
							setSortDir('asc')
							setTransactions((prev) => prev.slice().reverse())
						}}
					>
						Oldest
					</button>
				</div>
			</header>
			<ul className={'transaction-list space-y-4'}>
				{transactions.map((transaciton, i) => (
					<li key={`${transaciton.name}-${i}`} className={'transaction-item'}>
						<div className={'transaction-info'}>
							<Image
								src={transaciton.image}
								alt='transaction image'
								width={40}
								height={40}
							/>
							<div>
								<h6>{transaciton.name}</h6>
								<p>{dayjs(transaciton.date).format('DD MMMM, YYYY')}</p>
							</div>
						</div>
						<div className={'transaction-more-info'}>
							<div className={'transaction-amount'}>
								<p className='font-semibold'>
									{transaciton.type === 'expense' ? '-' : '+'} ${transaciton.amount}
								</p>
							</div>
							<Dropdown
								button={
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' className='w-5 h-5' />
									</ButtonIcon>
								}
							>
								<DropdownButton
									onClick={() =>
										setTransactions((prev) => {
											const newList = [...prev]
											newList.splice(i, 1)
											return newList
										})
									}
								>
									<Icon name='trash-can-outline' />
									Delete Item
								</DropdownButton>
							</Dropdown>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

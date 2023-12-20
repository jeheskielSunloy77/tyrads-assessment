'use client'

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { Transaction } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'

export default function LatestTransactionsCard(props: {
	transactions: Transaction[]
}) {
	const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
	const [transactions, setTransactions] = useState(props.transactions)
	return (
		<div className='p-4 rounded-2xl bg-white dark:bg-gray-900 space-y-4'>
			<div className='flex items-center justify-between'>
				<h5 className='font-semibold'>Latest transactions</h5>
				<div className='space-x-4'>
					<button
						className={`text-gray-500 hover:text-gray-700 ${
							sortDir === 'desc' ? 'underline' : ''
						}`}
						onClick={() => {
							setSortDir('desc')
							setTransactions(props.transactions)
						}}
					>
						Newest
					</button>
					<button
						className={`text-gray-500 hover:text-gray-700 ${
							sortDir === 'asc' ? 'underline' : ''
						}`}
						onClick={() => {
							setSortDir('asc')
							setTransactions((prev) => prev.slice().reverse())
						}}
					>
						Oldest
					</button>
				</div>
			</div>
			<div className='space-y-4 max-h-72 overflow-y-auto'>
				{transactions.map((transaciton, i) => (
					<div
						key={`${transaciton.name}-${i}`}
						className='flex items-center justify-between border-b dark:border-b-gray-800 py-2'
					>
						<div className='flex items-center gap-2'>
							<Image
								src={transaciton.image}
								alt='transaction image'
								width={40}
								height={40}
								className='w-10 h-10 rounded-full'
							/>
							<div>
								<p className='font-semibold'>{transaciton.name}</p>
								<p className='text-xs text-gray-400'>
									{dayjs(transaciton.date).format('DD MMMM, YYYY')}
								</p>
							</div>
						</div>
						<div className='flex items-center gap-6'>
							<div className='flex items-center gap-2'>
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
					</div>
				))}
			</div>
		</div>
	)
}

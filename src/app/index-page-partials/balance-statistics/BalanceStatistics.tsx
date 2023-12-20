'use client'

import BarChart from '@/components/charts/BarChart'
import LineChart from '@/components/charts/LineChart'
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { FinanceData } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useState } from 'react'

export default function BalanceStatistics(props: {
	financesData: FinanceData[]
	balanceDiffFromLastMonth: number
}) {
	const [isShowingBalance, setIsShowingBalance] = useState(true)
	const balance = props.financesData[props.financesData.length - 1].balance

	return (
		<div className='p-4 rounded-2xl bg-white dark:bg-gray-900'>
			<div className='flex items-center justify-between'>
				<h5 className='font-semibold'>Balance statistics</h5>
				<Dropdown
					button={
						<button className='text-gray-900 bg-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 flex items-center gap-2'>
							Filter
							<Icon name='chevron-up' className='w-5 h-5 rotate-180' />
						</button>
					}
				>
					<DropdownButton onClick={() => setIsShowingBalance((prev) => !prev)}>
						{isShowingBalance ? (
							<>
								<Icon name='eye-off-outline' /> Hide Balance Amount
							</>
						) : (
							<>
								<Icon name='eye-outline' /> Show Balance Amount
							</>
						)}
					</DropdownButton>
				</Dropdown>
			</div>
			<div className='grid md:grid-cols-[30%,70%] gap-4 md:gap-0'>
				<div className='space-y-5'>
					<div className='text-4xl font-bold'>
						${isShowingBalance ? balance : '----'}
					</div>
					<div className='flex items-center gap-2 border-b pb-2 dark:border-b-gray-800'>
						<Image
							src='/icons/balance-coins.svg'
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
								data={props.financesData}
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
						<div className='rounded-full border border-gray-900 dark:border-white'>
							<Icon name='arrow-up-thin' className='w-3 h-3' />
						</div>
						<div className='text-xs'>
							{Math.round(props.balanceDiffFromLastMonth)}%
						</div>
					</div>
					<p className='text-sm text-gray-400 dark:text-gray-500'>
						Always see your earnings updates!
					</p>
				</div>

				<BarChart
					data={props.financesData.map((data) => ({
						...data,
						date: dayjs(data.date).format('MMM'),
					}))}
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
	)
}

'use client'

import BarChart from '@/components/charts/bar-chart/BarChart'
import LineChart from '@/components/charts/line-chart/LineChart'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import { FinanceData } from '@/libs/db/mock-data'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import './BalanceStatistics.css'
const Dropdown = dynamic(() => import('@/components/dropdown/Dropdown'), {
	ssr: false,
})

export default function BalanceStatistics(props: {
	financesData: FinanceData[]
	balanceDiffFromLastMonth: number
}) {
	const [isShowingBalance, setIsShowingBalance] = useState(true)
	const balance = props.financesData[props.financesData.length - 1].balance

	return (
		<div className={'balance-card'}>
			<header>
				<h5>Balance statistics</h5>
				<Dropdown
					button={
						<button className={'balance-filter-button'}>
							Filter
							<Icon name='chevron-up' />
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
			</header>
			<div className={'balance-info-wrapper'}>
				<div className={'balance-info space-y-5'}>
					<h1>${isShowingBalance ? balance : '----'}</h1>
					<p className={'balance-subtitle'}>
						<Image
							src='/icons/balance-coins.svg'
							alt='balance coins'
							width={40}
							height={40}
						/>
						Your total balance
					</p>
					<div className={'line-statistic'}>
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
						<div className={'line-statistic-indicator'}>
							<Icon name='arrow-up-thin' />
						</div>
						<p>{Math.round(props.balanceDiffFromLastMonth)}%</p>
					</div>
					<p className={'balance-reminder'}>Always see your earnings updates!</p>
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

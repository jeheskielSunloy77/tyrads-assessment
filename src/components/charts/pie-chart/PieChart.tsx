'use client'
import { useThemeContext } from '@/contexts/theme'
import { useState } from 'react'
import {
	Legend,
	Pie,
	PieChart as ReachartsPieChart,
	ResponsiveContainer,
	Sector,
} from 'recharts'
import { ChartProps } from '../utils/types'

interface Props<T> extends ChartProps<T> {
	dataKey: string
}

export default function PieChart<T>(props: Props<T>) {
	const [activeIndex, setActiveIndex] = useState(0)

	const { theme } = useThemeContext()
	const isDark = theme === 'dark'

	return (
		<div
			style={{
				height: props.wrapperHeight || '240px',
			}}
		>
			<ResponsiveContainer>
				<ReachartsPieChart width={400} height={400}>
					<Pie
						activeIndex={activeIndex}
						activeShape={renderActiveShape}
						data={props.data}
						cx='50%'
						cy='75%'
						startAngle={180}
						endAngle={0}
						innerRadius={60}
						outerRadius={80}
						stroke={isDark ? '#000' : '#fff'}
						fill={isDark ? '#0ea5e9' : '#0ea5e9'}
						dataKey={props.dataKey}
						onMouseEnter={(_, i) => setActiveIndex(i)}
					/>
					<Legend />
				</ReachartsPieChart>
			</ResponsiveContainer>
		</div>
	)
}

const renderActiveShape = (props: any) => {
	const RADIAN = Math.PI / 180
	const {
		cx,
		cy,
		midAngle,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		payload,
		percent,
		value,
	} = props
	const sin = Math.sin(-RADIAN * midAngle)
	const cos = Math.cos(-RADIAN * midAngle)
	const sx = cx + (outerRadius + 10) * cos
	const sy = cy + (outerRadius + 10) * sin
	const mx = cx + (outerRadius + 30) * cos
	const my = cy + (outerRadius + 30) * sin
	const ex = mx + (cos >= 0 ? 1 : -1) * 22
	const ey = my
	const textAnchor = cos >= 0 ? 'start' : 'end'

	const fillColor = props.payload.payload.fill

	return (
		<g>
			<text
				x={cx}
				y={cy}
				dy={-10}
				textAnchor='middle'
				fill='currentColor'
				className='text-2xl font-semibold'
			>
				90%
			</text>
			<text
				x={cx}
				y={cy}
				dy={8}
				textAnchor='middle'
				className='text-xs fill-gray-400'
			>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fillColor}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fillColor}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fillColor}
				fill='none'
			/>
			<circle cx={ex} cy={ey} r={2} fill={fillColor} stroke='none' />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				className='text-sm fill-gray-800 dark:fill-gray-200'
			>{`${value}% Tasks`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				className='text-xs fill-gray-400 dark:fill-gray-500'
			>
				{`(${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	)
}

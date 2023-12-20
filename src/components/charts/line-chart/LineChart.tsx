'use client'
import {
	Line,
	LineChart as RechartsLineChart,
	ResponsiveContainer,
} from 'recharts'
import { ChartProps } from '../utils/types'

export default function LineChart<T>(
	props: ChartProps<T> & {
		xAxisDataKey: string
		lines: Pick<Line['props'], 'dataKey' | 'stroke' | 'fill'>[]
	}
) {
	return (
		<div
			style={{
				height: props.wrapperHeight || '240px',
			}}
		>
			<ResponsiveContainer>
				<RechartsLineChart data={props.data}>
					{props.lines.map((item, i) => {
						return (
							<Line
								key={i}
								type='monotone'
								dataKey={item.dataKey}
								stroke={item.stroke}
								fill={item.fill}
								dot={false}
							/>
						)
					})}
				</RechartsLineChart>
			</ResponsiveContainer>
		</div>
	)
}

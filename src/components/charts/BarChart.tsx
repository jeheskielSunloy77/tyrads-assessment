'use client'
import { useThemeContext } from '@/contexts/theme'
import {
	Bar,
	Legend,
	BarChart as RechartsBarChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import Wrapper from './parts/Wrapper'
import { ChartProps } from './utils/types'

export default function BarChart<T>(
	props: ChartProps<T> & {
		useLegend?: boolean
		bars: Pick<Bar['props'], 'dataKey' | 'stroke' | 'fill'>[]
		xAxisDataKey: string
	}
) {
	const { theme } = useThemeContext()
	const isDark = theme === 'dark'
	const fill = isDark ? '#e5e7eb' : '#374151'

	return (
		<Wrapper height={props.wrapperHeight}>
			<RechartsBarChart width={1000} height={400} data={props.data}>
				<XAxis
					dataKey={props.xAxisDataKey}
					style={{ fill }}
					axisLine={false}
					tickLine={false}
					fontSize={10}
				/>
				<YAxis style={{ fill }} axisLine={false} tickLine={false} fontSize={10} />
				<Tooltip
					labelStyle={{ color: fill }}
					contentStyle={{
						backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
						border: isDark ? '1px solid #374151' : '1px solid #d1d5db',
					}}
				/>
				{props.useLegend && <Legend />}
				{props.bars.map((bar, i) => {
					return (
						<Bar key={i} dataKey={bar.dataKey} fill={bar.fill} stroke={bar.stroke} />
					)
				})}
			</RechartsBarChart>
		</Wrapper>
	)
}

'use client'
import { useThemeContext } from '@/contexts/theme'
import { Line, LineChart as RechartsLineChart } from 'recharts'
import Wrapper from './parts/Wrapper'
import { ChartProps } from './utils/types'

export default function LineChart<T>(
	props: ChartProps<T> & {
		xAxisDataKey: string
		lines: Pick<Line['props'], 'dataKey' | 'stroke' | 'fill'>[]
	}
) {
	const { theme } = useThemeContext()
	const isDark = theme === 'dark'

	return (
		<Wrapper height={props.wrapperHeight}>
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
		</Wrapper>
	)
}

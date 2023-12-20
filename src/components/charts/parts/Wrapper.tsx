'use client'
import { ResponsiveContainer } from 'recharts'

export default function Wrapper(props: {
	children: JSX.Element
	isDark: boolean
	height?: string
}) {
	return (
		<>
			<div
				style={{
					height: props.height || '240px',
				}}
			>
				<ResponsiveContainer>{props.children}</ResponsiveContainer>
			</div>
			<style>
				{`
            .recharts-legend-item-text, .recharts-text.recharts-cartesian-axis-tick-value{
                font-size: 10px;
				color:${props.isDark ? '#d1d5db' : '#374151'};
            }
            .recharts-cartesian-axis-line, .recharts-cartesian-axis-tick-line{
                stroke:${props.isDark ? '#374151' : '#d1d5db'};
            }
			body
				> div.antialiased
				> main
				> div
				> div
				> div
				> div
				> div:nth-child(2)
				> div
				> div
				> div
				> div
				> svg
				> g.recharts-layer.recharts-polar-angle-axis
				> g
				> g
				> text
				> tspan {
				fill: ${props.isDark ? '#9ca3af' : '#4b5563'};
				font-size: 0.75rem;	
			}
            .
            `}
			</style>
		</>
	)
}

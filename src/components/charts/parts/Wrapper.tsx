'use client'
import { ResponsiveContainer } from 'recharts'

export default function Wrapper(props: {
	children: JSX.Element
	height?: string
}) {
	return (
		<div
			style={{
				height: props.height || '240px',
			}}
		>
			<ResponsiveContainer>{props.children}</ResponsiveContainer>
		</div>
	)
}

'use client'
import { ReactNode } from 'react'
import { LayoutContextProvider } from './layout'
import { ThemeProvider } from './theme'

export default function GlobalProviders(props: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<LayoutContextProvider>{props.children}</LayoutContextProvider>
		</ThemeProvider>
	)
}

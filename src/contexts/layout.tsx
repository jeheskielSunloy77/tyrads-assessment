'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface LayoutContext {
	isSidebarExpanded: boolean
	toggleSidebar: () => void
}

const context = createContext({} as LayoutContext)

export function LayoutContextProvider(props: { children: ReactNode }) {
	const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

	return (
		<context.Provider
			value={{
				isSidebarExpanded,
				toggleSidebar: () => setIsSidebarExpanded((prev) => !prev),
			}}
		>
			{props.children}
		</context.Provider>
	)
}

export function useLayoutContext() {
	return useContext(context)
}

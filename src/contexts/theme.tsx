'use client'
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'

const ThemeContext = createContext({} as ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light')

	useEffect(() => {
		setTheme((localStorage.getItem('theme') as Theme) || 'light')
	}, [])

	const themeToSwitch = theme === 'dark' ? 'light' : 'dark'

	const toggleColorMode = useCallback(
		() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
		[]
	)

	useEffect(() => {
		const root = window.document.documentElement
		root.style.colorScheme = theme
		root.classList.remove(themeToSwitch)
		root.classList.add(theme)
	}, [theme])

	const switchTheme = () => {
		toggleColorMode()
		localStorage.setItem('theme', themeToSwitch)
	}

	return (
		<>
			<ThemeContext.Provider value={{ theme, switchTheme }}>
				{children}
			</ThemeContext.Provider>
			<style>{`
				:root {
					color-scheme: ${theme};
				}
			`}</style>
		</>
	)
}
type Theme = 'dark' | 'light'

interface ThemeContext {
	theme: Theme
	switchTheme: () => void
}

export function useThemeContext() {
	return useContext(ThemeContext)
}

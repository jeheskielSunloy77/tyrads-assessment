'use client'
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

const ThemeContext = createContext({} as ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(() =>
		typeof window !== 'undefined'
			? (localStorage.getItem('theme') as Theme) || 'light'
			: 'light'
	)

	const themeToSwitch = theme === 'dark' ? 'light' : 'dark'

	useEffect(() => {
		const root = window.document.documentElement
		root.style.colorScheme = theme
		root.classList.remove(themeToSwitch)
		root.classList.add(theme)
	}, [theme, themeToSwitch])

	function toggleTheme() {
		setTheme(themeToSwitch)
		localStorage.setItem('theme', themeToSwitch)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
type Theme = 'dark' | 'light'

interface ThemeContext {
	theme: Theme
	toggleTheme: () => void
}

export function useThemeContext() {
	return useContext(ThemeContext)
}

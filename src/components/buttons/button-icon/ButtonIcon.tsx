import { ButtonHTMLAttributes } from 'react'

export default function ButtonIcon(props: ButtonIconProps) {
	return (
		<button
			{...props}
			className={`${props.className} ${
				sizes[props.size || 'medium']
			} inline-flex items-center text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-500 dark:text-gray-400 hover:text-gray-600 hover:dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-1`}
		/>
	)
}

export interface ButtonIconProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: keyof typeof sizes
}

const sizes = {
	small: 'p-1 rounded-md',
	medium: 'p-2 rounded-lg',
}

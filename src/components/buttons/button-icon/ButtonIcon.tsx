import { ButtonHTMLAttributes } from 'react'
import './ButtonIcon.css'

export default function ButtonIcon(props: ButtonIconProps) {
	return (
		<button
			{...props}
			className={`btn-icon ${props.size || 'medium'} ${props.className}`}
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

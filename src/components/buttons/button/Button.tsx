import { ButtonHTMLAttributes } from 'react'
import './Button.css'

export default function Button({
	className,
	variant,
	size,
	color,
	type,
	...restProps
}: ButtonProps) {
	return (
		<button
			type={type || 'button'}
			className={`transition-all btn ${variant || 'solid'} ${color || 'primary'} ${
				size || 'medium'
			} ${className} `}
			{...restProps}
		/>
	)
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'solid' // | 'outline' | 'ghost'
	size?: 'small' | 'medium' // |'extraSmall' | 'large'
	color?: 'primary' // | 'secondary' | 'error' | 'warning' | 'success'
}

'use client'
import { Menu } from '@headlessui/react'
import './DropdownButton.css'

interface DropdownButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function DropdownButton(props: DropdownButtonProps) {
	return <Menu.Item as='button' className={'dropdown-item'} {...props} />
}

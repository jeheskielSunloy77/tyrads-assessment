'use client'
import { Menu } from '@headlessui/react'

interface DropdownButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export default function DropdownButton(props: DropdownButtonProps) {
	return (
		<Menu.Item
			as='button'
			className='group hover:bg-gray-100 dark:hover:bg-gray-700 flex w-full gap-3 items-center px-4 py-2.5'
			{...props}
		/>
	)
}

'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface DropdownProps {
	children: ReactNode
	button: ReactNode
}

export default function Dropdown(props: DropdownProps) {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<Menu.Button>{props.button}</Menu.Button>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute z-[999999] right-0 w-max mt-2 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg dark:shadow-[#111111] ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{props.children}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import './Dropdown.css'

interface DropdownProps {
	children: ReactNode
	button: ReactNode
}

export default function Dropdown(props: DropdownProps) {
	return (
		<Menu as='div' className={'dropdown'}>
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
				<Menu.Items className={'dropdown-items shadow-lg ring-1'}>
					{props.children}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

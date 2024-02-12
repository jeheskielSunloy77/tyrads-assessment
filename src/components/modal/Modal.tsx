'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import ButtonIcon from '../buttons/button-icon/ButtonIcon'
import Icon from '../icon/Icon'
import './Modal.css'

export default function Modal(props: ModalProps) {
	return (
		<>
			<Transition appear show={props.isOpen} as={Fragment}>
				<Dialog as='div' className={'dialog'} onClose={props.closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className={'overlay'} />
					</Transition.Child>

					<div className={'first-layer'}>
						<div className={'second-layer'}>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel
									style={props.panelStyle}
									className={
										props.panelClassName ||
										'dialog-panel transform transition-all shadow-xl'
									}
								>
									<header
										style={{
											justifyContent: props.title ? 'space-between' : 'flex-end',
										}}
									>
										{props.title && <Dialog.Title as='h3'>{props.title}</Dialog.Title>}
										<ButtonIcon title='Tutup' onClick={props.closeModal}>
											<Icon name='close' />
										</ButtonIcon>
									</header>
									{props.children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

interface ModalProps {
	isOpen: boolean
	closeModal: () => void
	children: ReactNode
	title?: string
	panelStyle: React.CSSProperties
	panelClassName?: string
}

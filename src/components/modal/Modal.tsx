'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import ButtonIcon from '../buttons/button-icon/ButtonIcon'
import Icon from '../icon/Icon'

export default function Modal(props: ModalProps) {
	return (
		<>
			<Transition appear show={props.isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-50' onClose={props.closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
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
									className={
										props.panelClassName ||
										`${
											props.panelClassNameExtension || ''
										} w-full transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all`
									}
								>
									<div
										className={`flex items-center mb-2 ${
											props.title ? 'justify-between' : 'justify-end'
										}`}
									>
										{props.title && (
											<Dialog.Title
												as='h3'
												className='text-lg font-bold leading-6 text-gray-900 dark:text-gray-100'
											>
												{props.title}
											</Dialog.Title>
										)}
										<ButtonIcon title='Tutup' onClick={props.closeModal}>
											<Icon
												name='close'
												className='w-5 h-5 2xl:w-6 2xl:h-6 hover:rotate-90 transition-transform'
											/>
										</ButtonIcon>
									</div>
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
	panelClassNameExtension?: string
	panelClassName?: string
	title?: string
}

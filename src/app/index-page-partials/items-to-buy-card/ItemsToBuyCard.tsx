'use client'

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import Modal from '@/components/modal/Modal'
import { ShoppingListItem } from '@/libs/db/mock-data'
import { useState } from 'react'

export default function ItemsToBuyCard(props: {
	shoppingList: ShoppingListItem[]
}) {
	const [shoppingList, setShoppingList] = useState(props.shoppingList)
	const [selectedItem, setSelectedItem] = useState<string | null>(null)

	return (
		<>
			<div className='space-y-3 border-b md:border-r p-4 dark:border-gray-700'>
				<h6 className='font-semibold text-sm'>List of items to buy</h6>
				<div className='flex items-center justify-between w-3/4 sm:w-1/2'>
					<div>
						<div className='text-xl font-semibold'>02:00</div>
						<p className='text-xs text-gray-400'>Sat, Auguest 28</p>
					</div>
					<Icon name='chevron-up' className='w-6 h-6 rotate-90' />
					<div>
						<div className='text-xl font-semibold'>05:00</div>
						<p className='text-xs text-gray-400'>Mon, Auguest 30</p>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<div className='text-sm'>
						<span className='text-gray-400'>
							{shoppingList.filter((item) => item.checked).length}/
							{shoppingList.length}
						</span>
						<span className='font-semibold'> Shopping list</span>
					</div>
					<ButtonIcon size='small' onClick={() => setSelectedItem('new')}>
						<Icon name='plus' className='w-6 h-6' />
						<span className='font-semibold'>Add an item</span>
					</ButtonIcon>
				</div>
				<div className='grid sm:grid-cols-2 gap-2'>
					{shoppingList.map((item, i) => (
						<div
							key={item.name + i}
							className='px-4 py-3 rounded-md flex items-center justify-between bg-gray-100 dark:bg-gray-800'
						>
							<div className='flex items-center'>
								<input
									checked={item.checked}
									id={`shopping-list-${item.name}`}
									type='checkbox'
									className='w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
									onChange={(e) =>
										setShoppingList((prev) => {
											const newList = [...prev]
											newList[i].checked = e.target.checked
											return newList
										})
									}
								/>
								<label
									htmlFor={`shopping-list-${item.name}`}
									className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
								>
									{item.name}
								</label>
							</div>
							<Dropdown
								button={
									<ButtonIcon size='small'>
										<Icon name='dots-vertical' className='w-5 h-5' />
									</ButtonIcon>
								}
							>
								<DropdownButton
									onClick={() =>
										setShoppingList((prev) => {
											const newList = [...prev]
											newList.splice(i, 1)
											return newList
										})
									}
								>
									<Icon name='trash-can-outline' />
									Delete Item
								</DropdownButton>
								<DropdownButton onClick={() => setSelectedItem(item.id)}>
									<Icon name='eye-outline' />
									Update Item
								</DropdownButton>
							</Dropdown>
						</div>
					))}
				</div>
			</div>
			<Modal
				closeModal={() => setSelectedItem(null)}
				isOpen={!!selectedItem}
				title={`${selectedItem === 'new' ? 'Add' : 'Update'} an Item`}
				panelClassNameExtension='max-w-2xl'
			>
				<form
					className='space-y-4'
					onSubmit={(e) => {
						e.preventDefault()
						const name = e.currentTarget['item-name'].value
						if (selectedItem === 'new') {
							setShoppingList((prev) => [
								...prev,
								{ name, checked: false, id: `shopping-list-item-${prev.length + 1}` },
							])
						} else {
							setShoppingList((prev) => {
								const newList = [...prev]
								const index = newList.findIndex((item) => item.id === selectedItem)
								newList[index].name = name
								return newList
							})
						}
						setSelectedItem(null)
					}}
				>
					<div>
						<label
							htmlFor='item-name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Item Name
						</label>
						<input
							type='text'
							id='item-name'
							name='item-name'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Fill in the name of the item'
							required
							defaultValue={
								selectedItem === 'new'
									? ''
									: shoppingList.find((item) => item.id === selectedItem)?.name
							}
						/>
					</div>
					<Button type='submit'>
						{selectedItem === 'new' ? 'Add' : 'Update'} Item
					</Button>
				</form>
			</Modal>
		</>
	)
}

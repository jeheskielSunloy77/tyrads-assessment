'use client'

import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import DropdownButton from '@/components/dropdown/DropdownButton'
import Icon from '@/components/icon/Icon'
import Modal from '@/components/modal/Modal'
import { ShoppingListItem } from '@/libs/db/mock-data'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import './ItemsToBuyCard.css'
const Dropdown = dynamic(() => import('@/components/dropdown/Dropdown'), {
	ssr: false,
})

export default function ItemsToBuyCard(props: {
	shoppingList: ShoppingListItem[]
}) {
	const [shoppingList, setShoppingList] = useState(props.shoppingList)
	const [selectedItem, setSelectedItem] = useState<string | null>(null)

	return (
		<>
			<div className={'shopping-list-card space-y-3'}>
				<h6>List of items to buy</h6>
				<div className={'shopping-list-filters'}>
					<div>
						<h5>02:00</h5>
						<p>Sat, Auguest 28</p>
					</div>
					<Icon name='chevron-up' />
					<div>
						<h5>05:00</h5>
						<p>Mon, Auguest 30</p>
					</div>
				</div>
				<div className={'shopping-list-info'}>
					<div>
						<span>
							{shoppingList.filter((item) => item.checked).length}/
							{shoppingList.length}
						</span>
						<h6> Shopping list</h6>
					</div>
					<ButtonIcon size='small' onClick={() => setSelectedItem('new')}>
						<Icon name='plus' />
						<span>Add an item</span>
					</ButtonIcon>
				</div>
				<ul className={'shopping-list'}>
					{shoppingList.map((item, i) => (
						<li key={item.name + i} className={'shopping-item'}>
							<div>
								<input
									checked={item.checked}
									id={`shopping-list-${item.name}`}
									type='checkbox'
									onChange={(e) =>
										setShoppingList((prev) => {
											const newList = [...prev]
											newList[i].checked = e.target.checked
											return newList
										})
									}
								/>
								<label htmlFor={`shopping-list-${item.name}`}>{item.name}</label>
							</div>
							<Dropdown
								button={
									<ButtonIcon size='small'>
										<Icon
											name='dots-vertical'
											style={{
												width: 'var(--size-5)',
												height: 'var(--size-5)',
											}}
										/>
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
						</li>
					))}
				</ul>
			</div>
			<Modal
				closeModal={() => setSelectedItem(null)}
				isOpen={!!selectedItem}
				title={`${selectedItem === 'new' ? 'Add' : 'Update'} an Item`}
				panelStyle={{ maxWidth: '24rem' }}
			>
				<form
					className={'add-item-form space-y-4'}
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
						<label htmlFor='item-name'>Item Name</label>
						<input
							type='text'
							id='item-name'
							name='item-name'
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

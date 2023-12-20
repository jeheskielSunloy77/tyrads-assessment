'use client'
import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import Icon from '@/components/icon/Icon'
import { ChatMessage } from '@/libs/db/mock-data'
import Image from 'next/image'
import { useState } from 'react'

export default function ChatCard(props: { chatMessages: ChatMessage[] }) {
	const [chatMessages, setChatMessages] = useState(props.chatMessages)
	return (
		<div className='space-y-3 p-4 border-l'>
			<h6 className='font-semibold'>Ester Howard</h6>
			<div className='max-h-[88px] overflow-auto space-y-2'>
				{chatMessages.map((chat) => {
					const isMe = chat.from === 'Me'
					return (
						<div
							key={chat.date.toString()}
							className={`flex items-center gap-2 ${
								isMe ? 'justify-end' : 'flex-row-reverse justify-end'
							}`}
						>
							<div
								className={`${
									isMe
										? 'bg-primary-500 text-white rounded-bl-lg'
										: 'bg-gray-100 rounded-br-lg'
								} px-4 py-2 rounded-t-lg`}
							>
								{chat.message}
							</div>
							<Image
								src={`https://api.dicebear.com/7.x/open-peeps/png${
									isMe ? '' : '?seed=344'
								}`}
								alt='chat profile image'
								className='w-10 h-10 rounded-full border dark:border-gray-800'
								width={40}
								height={40}
							/>
						</div>
					)
				})}
			</div>
			<form
				className='relative'
				onSubmit={(e) => {
					e.preventDefault()
					const message = e.currentTarget['chat-message'].value
					if (message.trim().length > 0) {
						setChatMessages((prev) => {
							const newChatMessages = [...prev]
							newChatMessages.push({
								date: new Date(),
								from: 'Me',
								message,
							})
							return newChatMessages
						})
						e.currentTarget.reset()
					}
				}}
			>
				<textarea
					name='chat-message'
					rows={3}
					placeholder='Type your message'
					className='bg-gray-100 w-full rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:focus:ring-primary-600'
				></textarea>

				<div className='absolute bottom-3 flex items-center justify-between w-full px-2'>
					<div>
						<ButtonIcon size='small'>
							<Icon
								className='w-6 h-6 text-black dark:text-white'
								name='emoticon-outline'
							/>
						</ButtonIcon>
						<ButtonIcon size='small'>
							<Icon className='w-6 h-6 text-black dark:text-white' name='paperclip' />
						</ButtonIcon>
					</div>
					<Button type='submit' size='small'>
						Send now
					</Button>
				</div>
			</form>
		</div>
	)
}

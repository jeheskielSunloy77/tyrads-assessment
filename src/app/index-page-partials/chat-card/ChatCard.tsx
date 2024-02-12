'use client'
import ButtonIcon from '@/components/buttons/button-icon/ButtonIcon'
import Button from '@/components/buttons/button/Button'
import Icon from '@/components/icon/Icon'
import { ChatMessage } from '@/libs/db/mock-data'
import Image from 'next/image'
import { useState } from 'react'
import './ChatCard.css'

export default function ChatCard(props: { chatMessages: ChatMessage[] }) {
	const [chatMessages, setChatMessages] = useState(props.chatMessages)
	return (
		<div className={'chat-card space-y-3'}>
			<h6 className='font-semibold'>Ester Howard</h6>
			<ul className={'chat-list space-y-2'}>
				{chatMessages.map((chat) => {
					const isMe = chat.from === 'Me'
					return (
						<li
							key={chat.date.toString()}
							className={'chat-item'}
							style={{
								flexDirection: isMe ? 'row-reverse' : undefined,
								justifyContent: 'flex-end',
							}}
						>
							<div className={isMe ? 'chat-message-sent' : 'chat-message-received'}>
								{chat.message}
							</div>
							<Image
								src={`https://api.dicebear.com/7.x/open-peeps/png${
									isMe ? '' : '?seed=344'
								}`}
								alt='chat profile image'
								width={40}
								height={40}
							/>
						</li>
					)
				})}
			</ul>
			<form
				className={'chat-form'}
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
				></textarea>

				<div className={'form-buttons'}>
					<div>
						<ButtonIcon size='small'>
							<Icon name='emoticon-outline' />
						</ButtonIcon>
						<ButtonIcon size='small'>
							<Icon name='paperclip' />
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

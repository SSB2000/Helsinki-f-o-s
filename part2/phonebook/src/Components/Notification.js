import React from 'react'

export default function Notification({message, type}) {
	return (
		<div 
			className={type}
		>
		{message}
		</div>
	)
}

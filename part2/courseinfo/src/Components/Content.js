import React from 'react'
import Part from "./Part"

export default function Content({ courseParts }) {
	return (
		<div>
			{courseParts.map(part => 
				<Part key={part.id} part={part}/>
			)}
		</div>
	)
}

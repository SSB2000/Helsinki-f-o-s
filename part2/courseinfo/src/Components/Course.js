import React from 'react'
import Header from './Header'
import Content from './Content'
import Sum from './Sum'

export default function Course({ course }) {
	const total = course.parts.reduce((sum, p) => sum + p["exercises"], 0);

	return (
		<div>
			<Header couresName={course.name}/>
			<Content courseParts={course.parts}/>
			<Sum total={total}/>
		</div>
	)
}

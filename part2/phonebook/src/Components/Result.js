import React from 'react'
import { useState } from 'react';
export default function Result(props) {
	const [ result, setResult ] = useState([]);
	setResult(props.persons);
	console.log(`result`, result);
	return (
		<ul>
			{/* {result.filter(
				person => <li>{person.name}</li>
			)} */}
		</ul>
	)
}


import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {
	
	const { state: counter, increment } = useCounter(1);
	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	const { quote } = !!data && data[0];
	// se ejecuta despues de renderizar algo en el DOM, es parecido al useEffect
	const pTag = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout</h1>
			<hr />
			<blockquote className="blockquote">
				<p
					ref={ pTag }
					className="mb-2"
					>
						{ quote }
				</p>
			</blockquote>
			<pre>
				{ JSON.stringify(boxSize, null, 3)}
			</pre>
			<button
				onClick={ () => increment(1) }
				className="btn btn-primary"
			>
				Siguiente quote
			</button>
		</div>
	)
}

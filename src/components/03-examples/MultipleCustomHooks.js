import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
	
	const { state: counter, increment } = useCounter(1);
	const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//si existe data extrae data[0];
	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h1>Breakind Bad</h1>
			<hr />
			{
				loading
				?
				(
					<div className="alert alert-info text-center">
						Loading ...
					</div>
				)
				:
				(
					<blockquote className="blockquote">
						<p className="mb-2">{ quote }</p>
						<footer className="blockquote-footer">{ author }</footer>
					</blockquote>
				)
			}
			<button
				onClick={ () => increment(1) }
				className="btn btn-primary"
			>
				Siguiente quote
			</button>
		</div>
	)
}

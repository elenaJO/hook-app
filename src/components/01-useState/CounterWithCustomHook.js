import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'
export const CounterWithCustomHook = () => {
	const { state, decrement, increment, reset } = useCounter(100);

	//increment si le mando solo asi por defecto envia por parametro el event
	return (
		<>
			<h1>{ state }</h1>
			<hr/>
			<button onClick={ () => increment(2) } className="btn">+1</button>
			<button onClick={ reset } className="btn">reset</button>
			<button onClick={ () => decrement(2) } className="btn">-1</button>
		</>
	)
}

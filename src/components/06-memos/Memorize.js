import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

//En react cada vez q cambie algo  vuelve a renderizar todo el compomente (si cambio el valor de show no tendria por que cambiar el componente small ya q el counter no cambia)
//para es utilizams el memo para que solo se vuelva pintar <Small /> cuand cambie su prop
export const Memorize = () => {
	const { state:counter, increment } = useCounter(10);

	const [show, setShow] = useState(true);

	return (
		<div>
			<h1>Counter: <Small value={ counter }/></h1>
			<hr/>
			<button
				onClick={ () => increment(1)}
				className="btn btn-primary">
				+1
			</button>
			<button onClick={() => setShow(!show)} className="btn btn-outline-primary mx-3">
				Hide/Show { JSON.stringify(show) }
			</button>
		</div>
	)
}

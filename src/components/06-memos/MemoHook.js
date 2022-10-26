import React, { useMemo, useState } from 'react'
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter'

//el useMemo sirve para decirle memoriza este valor si los argumentos son iguales si cambia vuelve a reprocesar la operacion, y memorizate el resultado

export const MemoHook = () => {
	const { state:counter, increment } = useCounter(10);

	const [show, setShow] = useState(true);

	//tmb se vuelve a procesar cuando cambia el show
	const procesoPesado = (iteraciones) => {
		for(let i = 1; i < iteraciones; i++) {
			console.log('Ahi vamos :(');
		}
		return `${iteraciones} iteraciones realizadas`;
	}

	//si el counter cambia necesito la version memorizada de esa funcion
	//si cambia show no vuelve a ejecutar la funcion por q el counter no cambia y me devuelve el resultado memorizado
	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter]);

	return (
		<div>
			<h1>Memo Hook</h1>
			<h3>Counter: <small>{ counter }</small></h3>
			<hr/>
			<p>{ memoProcesoPesado }</p>
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

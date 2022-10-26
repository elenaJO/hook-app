import React from 'react'

// aun poniendo React.memo se vuelve a pintar el componente esto para por que tiene el prop increment
//y a cambiar el counter vuelve a crear tmb la funcion increment() en memoria osea como una nueva funcion
export const ShowIncrement = React.memo(({ increment }) => {
	console.log('Me volvi a generar :(');
	return (
		<button 
			className="btn btn-primary"
			onClick={ () => {
				increment(5)
			}}
		>
			Incrementar
		</button>
	)
})

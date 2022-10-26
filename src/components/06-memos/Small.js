import React from 'react'

//es la funcion que va a memorizar mi componente solo se renderiza otra vez cuando las props cambio
export const Small = React.memo(({ value }) => {
	console.log('Me volvi a mostrar :(')
	return (
		<div>
			<small>{ value }</small>
		</div>
	)
})

import React, { useCallback, useEffect, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //cada vez que incremento se vuelve a montar el componente <ShowIncrement /> por que cambia el counter y se vuelve a renderizar todo
  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  //el useCallback lo podemos usar en 2 cosas
  //1. cuando pasamos una funcion a un componente hijo, 
  //regresa una version memorizada de esa funcion para mandar de argumentos en otros lugares, a menos que cambie la dependecia q se coloca
  // si no cambia el setCounter no tiene por q volverse a crear esa funcion y asi no se volveria a renderizar ShowIncrement
  const increment = useCallback((value) => {
      setCounter(c => c + value); // de esta manera elimino la dependencia
    }, [setCounter],
  )

  //2. tmb se usa si usamos el useEffect y el efecto tiene una dependia del increment  ya q si no usamos el useCallback se volveria a renderizar el componente ShowIncrement
  useEffect(() => {
    //???
  }, [increment])

  return (
    <div>
      <h1>CallBackHook { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment }/>
    </div>
  )
}

import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
	//esta haciendo referencia al componente que se encuentra, nos dira si el componente esta montado
	const isMounted = useRef(true);
	// console.log(isMounted);
	const [state, setState] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		return () => {
			//cuando se desmonte cambia la referencia a false para q ya no llame al api por q el useEffect tmb sigue funcionando cuando el componente esta desmontado
			isMounted.current = false;
			// console.log(isMounted);
		}
	}, []);

	useEffect(() => {
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				if(isMounted.current) {
					setState({
						loading: false,
						error: null,
						data,
					});
				} 
				// else {
				// 	console.log('esta desmontado');
				// }
			})
			.catch(() => {
				setState({
					data: null,
					loading: false,
					error: 'No se puedo cargar la info',
				});
			})
	}, [url]);

	return state;
}

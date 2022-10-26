import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas hook useFetch', () => {
	test('debe retornar la informacion por defecto', () => {
		const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
		const { data, loading, error } = result.current;

		//es sincrono, osea no esperamosla respuesta por eso develve null
		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	})

	test('debe de tener la info deseada', async() => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
		await waitForNextUpdate({timeout:5000}); //nos regresa una promea para ver si ya se consumio el servicio, el timeout es por q el servicio no responde muy rapido
		const { data, loading, error } = result.current;
		expect(data.length).toBe(1);
		expect(loading).toBe(false);
		expect(error).toBe(null);
	})

	test('debe de manejar el error', async() => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
		await waitForNextUpdate({timeout:5000}); //nos regresa una promea para ver si ya se consumio el servicio, el timeout es por q el servicio no responde muy rapido
		const { data, loading, error } = result.current;
		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).toBe('No se puedo cargar la info');
	})
})
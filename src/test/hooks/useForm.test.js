import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el hook useForm', () => {
	const initialState = {
		name: 'Elena',
		email: 'ele@gmail.com',
	};

	test('debe regresar un formulario por defecto', () => {
		const { result } = renderHook(() => useForm(initialState));
		expect(result.current[0]).toEqual(initialState);
		expect(typeof result.current[1]).toBe('function');
		expect(typeof result.current[2]).toBe('function');
	})

	test('debe de cambiar el valor del formulario(cambiar name)', () => {
		const { result } = renderHook(() => useForm(initialState));
		const [ , handleInputChange ] = result.current;
		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Lucero',
				},
			});
		});
		//se extrae aca values por si es antes es con su vaor anterior
		const [values] = result.current;
		//me aseguro que las otras prioridades no cambian solo el name;
		expect(values).toEqual({...initialState, name: 'Lucero'});
	})

	test('debe reestablecer valores por defecto', () => {
		const { result } = renderHook(() => useForm(initialState));
		const [ , handleInputChange, reset] = result.current;
		act(() => {
			handleInputChange({
				target: {
					name: 'name',
					value: 'Lucero',
				},
			});
			reset();
		});
		const [values] = result.current;
		expect(values).toEqual(initialState);
	})
})
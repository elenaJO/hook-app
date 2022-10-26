import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en el hook useCounter', () => {
	test('debe retornar valores por defecto', () => {
		const { result } = renderHook(() => useCounter());
		expect(result.current.state).toBe(10);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	})

	test('debe retornar el counter 100', () => {
		const { result } = renderHook(() => useCounter(100));
		expect(result.current.state).toBe(100);
	})

	test('debe incrementar el counter en 101', () => {
		// si queremos hacer pruebas de una accion usamos act
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;
		act(() => {
			increment();
		});
		const { state } = result.current;
		expect(state).toBe(101);
	})

	test('debe decrementar el counter en 99', () => {
		const { result } = renderHook(() => useCounter(100));
		const { decrement } = result.current;
		act(() => {
			decrement();
		});
		const { state } = result.current;
		expect(state).toBe(99);
	})

	test('debe de reestablecer su valor', () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment, reset } = result.current;
		act(() => {
			increment(); //solo lo ejecuta una vez ose si pongo otra vez increment() no ejecuta
			reset()
		});
		const { state } = result.current;
		expect(state).toBe(100);
	})
})
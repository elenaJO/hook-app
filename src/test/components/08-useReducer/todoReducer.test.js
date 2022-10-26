import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
	test('debe de retornar el estado por defecto', () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	})
	
	test('debe de agregar un todo', () => {
		const newTodo = {
			id: 3,
			desc: 'Aprender Node',
			done: false,
		};
		const state = todoReducer(demoTodos, {
			type: 'add',
			payload: newTodo,
		});
		expect(state.length).toBe(3);
		expect(state).toEqual([...demoTodos, newTodo]);
	})

	test('debe de borrar un TODO', () => {
		const state = todoReducer(demoTodos, {
			type: 'delete',
			payload: 1,
		});
		expect(state.length).toBe(1);
		// expect(state).toEqual(demoTodos.filter(d => d.id !== 1));
		expect(state).toEqual([ demoTodos[1] ]);
	})

	test('dede de hacer el TOGGLE el todo', () => {
		const state = todoReducer(demoTodos, {
			type: 'toogle',
			payload: 1,
		});
		const doneDemo = demoTodos.find(s => s.id === 1).done;
		const doneAct = state.find(s => s.id === 1).done;
		expect(doneDemo).toBe(!doneAct);
		expect(state[1]).toEqual(demoTodos[1]); //par asegurarme q no cambio el segundo
	})
})
import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el componente <TodoAdd/>', () => {
	const handleAdd = jest.fn();
	const wrapper = shallow(
		<TodoAdd
			handleAdd={ handleAdd }
		/>
	)

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('NO debe llamar a la funcion handleAdd', () => {
		//otra forma de simular es, da una funcion y lo podemo llamar
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault(){} });
		//no se llamo ninguna vez
		expect(handleAdd).toHaveBeenCalledTimes(0);
	})

	test('debe llamar la funcion handleAdd', () => {
		const value = 'Aprender React';
		wrapper.find('input').simulate('change', 
			{ 
				target:  { name: 'description', value }
			});
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault(){} });
		expect(handleAdd).toHaveBeenCalledTimes(1);
		expect(handleAdd).toHaveBeenCalledWith(expect.any(Object)); //esta bien pero tmb puedo mandar objeto vacio no es muy preciso
		expect(handleAdd).toHaveBeenCalledWith({
			id: expect.any(Number), //espera cualquier numero
			desc: value,
			done: false,
		});
		expect(wrapper.find('input').prop('value')).toBe(''); //vemos los efectos del reset, que se limpie el input
	})
})
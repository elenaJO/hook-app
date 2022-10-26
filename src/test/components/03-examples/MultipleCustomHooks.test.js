import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');//me importa solo resultados
//bien le pongo esto ya no utiliza el useFetch sino necesita lo q yo le retorno por eso pongo el mockReturnValue
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
	//como no lo voy a acambiar lo defino aca
	beforeEach(() => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {}
		})
	})

	test('debe de mostrarse correctamente', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks/>);
		//esto sirve para verificar si se ha cambiado la estructura del componente
		expect(wrapper).toMatchSnapshot();
	})

	test('debe de mostrar informacion', () => {
		//no me interesa lo q haga el useFetch solo la informacion que retorna para eso le 
		//pasamos por un mock
		useFetch.mockReturnValue({
			data: [{
				author: 'Elena',
				quote: 'Hola mundo',
			}],
			loading: false,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks/>);
		// console.log(wrapper.html());
		expect(wrapper.find('.alert').exists()).toBe(false); //no dee de existir por q hay info
		expect(wrapper.find('.mb-2').text().trim()).toBe('Hola mundo'); //no dee de existir por q hay info
		expect(wrapper.find('footer').text().trim()).toBe('Elena'); //no dee de existir por q hay info

	})
})
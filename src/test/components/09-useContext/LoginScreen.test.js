import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas con <LoginScreen/>', () => {
	const setUser = jest.fn();

	// const user = {
	// 	name: 'Elena',
	// 	email: 'elena@gmail.com'
	// };

	const wrapper = mount(
		<UserContext.Provider value={
			{
				setUser
			}}>
			<LoginScreen/>
		</UserContext.Provider>
	);

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	})

	test('debe de ejecutar el setUser con el argumento esperado', () => {
		const user = {
			id: 1,
			name: 'Elena',
		};
		//si uso el shallow no puedo acceder al boton por q el boton no esta renderizado.
		const btn = wrapper.find('button').prop('onClick');
		btn();
		expect(setUser).toHaveBeenCalledTimes(1);
		expect(setUser).toHaveBeenCalledWith(user);
	})
})
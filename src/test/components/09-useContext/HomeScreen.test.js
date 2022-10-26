import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('pruebas en <HomeScreen/>', () => {
	//necesita el user entonces tmb creamos un useContext
	//el shallow solo renderiza en primero componente que es el UserContext, lo unico q hace es rederizar el HomeScreen por eso utilizams el mount
	const user = {
		name: 'Elena',
		email: 'elena@gmail.com'
	};

	const wrapper = mount(
		<UserContext.Provider value={{
			user
		}}>
			<HomeScreen/>
		</UserContext.Provider>
	);
	test('debe mostrarse correctamente', async () => {
		expect(wrapper).toMatchSnapshot();
	})
})
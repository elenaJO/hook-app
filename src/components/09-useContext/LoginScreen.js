import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
	const { setUser} = useContext(UserContext);

	return (
		<div>
			<h1>LoginScreen</h1>
			<hr/>
			<button 
				className="btn btn-primary my-2" 
				onClick={() => setUser({ id:1, name: 'Elena'})}>
				Login
			</button>
		</div>
	)
}

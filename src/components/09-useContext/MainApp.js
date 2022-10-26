//es aplicacion como tal
import React, { useState } from 'react'
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';
export const MainApp = () => {

  const [user, setUser] = useState({});

	return (
    //el UserContext le va a proveer informacion al AppRouter y este a sus hijos, mediante propiedad value
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter />
    </UserContext.Provider>
	)
}

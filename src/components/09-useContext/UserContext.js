//es un componente que emarque a sus hijos, para que transfiera su informacion a ellos
import { createContext } from 'react';

// ya creamos el context,es un HOC son compoementes q tiene compoenetes hijos.
export const UserContext = createContext(null);
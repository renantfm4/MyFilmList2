import {useContext} from 'react';
import { Auth } from './Auth.jsx';

export function useAuth(){
    const value = useContext(Auth);
    return value;
}

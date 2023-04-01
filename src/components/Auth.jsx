import React, {createContext} from "react";

export const Auth = createContext();

export function AuthProvider(props){
    function Logar(email,password){
    const datas = JSON.parse(localStorage.getItem('Dados')) ?? [];

    const login = datas.find(login => login.email === email && login.password === password);

    if(datas === undefined){
        return;
    }

    return login;
}

return(
    <Auth.Provider value={{Logar}}>
        {props.children}
    </Auth.Provider>
)
}

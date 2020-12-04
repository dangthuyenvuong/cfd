import React, { useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';


let AuthContext = React.createContext();

export function useAuth(){
   return useContext(AuthContext)
}


export default function AuthProvider({children}){
    let [user, setUser] = useState({
        name: 'Dang Thuyen Vuong'
    })

    let value = {
        user,
        login: false
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
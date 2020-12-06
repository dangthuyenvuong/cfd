import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Api from '../Api';


let AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export default function AuthProvider({ children }) {
    let [user, setUser] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let user = localStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);

            getInfo(user);
        } else {
            setLoading(false);
        }


    }, [])


    function getInfo(user) {
        Api('api/get-user-info').get()
            // fetch('http://localhost:8888/api/get-user-info', {
            //     headers: {
            //         'Authorization': `Bear ${user.accessToken}` 
            //     }
            // })
            .then(res => {
                if (res.accessToken) {
                    setUser(res);
                    localStorage.setItem('user', JSON.stringify(res));
                    setLoading(false);
                }

            })
    }




    function login(user) {
        return fetch('http://localhost:8888/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }

            })
            .then(res => {
                if (res.error) {
                    return res
                } else {
                    localStorage.setItem('user', JSON.stringify(res));
                    setUser(res)
                }
            })

    }

    let value = {
        user,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
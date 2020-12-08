


// const domain = 'http://localhost:8888/';

// let headers = {
//     'Content-Type': 'application/json'
// }

// let user = localStorage.getItem('user');
// let _refreshToken;
// if (user) {
//     user = JSON.parse(user);
//     headers = {
//         ...headers,
//         'Authorization': `Bear ${user.accessToken}`
//         // 'Authorization': `Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZ1b25nLmRhbmdAZG5hLnZuIiwiX2lkIjoiNWZhZmFkYjgzMzRlZTkyZjQ0MmQ3YTNjIiwiaWF0IjoxNjA3MTU5MTYxLCJleHAiOjE2MDcyNDU1NjF9.ECfb4Ng0hkx9k5aNZl0KoQAxZRcEntKMxvhNb0dMfuU`

//     }

//     _refreshToken = user.refreshToken;
// }

// async function refreshToken() {
//     let user = localStorage.getItem('user');

//     if (user) {
//         user = JSON.parse(user);
//         if (user.refreshToken) {
//             let res = await fetch(domain + 'api/refresh-token', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     refreshToken: user.refreshToken
//                 })
//             })

//             if (res.status === 200) {
//                 res = await res.json()
//                 if (res.accessToken) {
//                     user.accessToken = res.accessToken;
//                     headers.Authorization = `Bear ${res.accessToken}`
//                     localStorage.setItem('user', JSON.stringify(user));

//                     return true;
//                 }

//             }
//         }
//     }

//     return false;
// }

// async function checkRefreshToken(res, callback) {
//     if (res.status === 200) {
//         return await res.json()
//     }


//     if (res.status === 403) {

//         res = await res.json();
//         console.log(res)

//         if (res.error_code === 'TOKEN_EXPIRED') {
//             let check = await refreshToken();
//             if (check) {
//                 return callback();
//             }
//         }
//     }
// }


// function cacheError(res) {
//     if (res.status === 200) {
//         return res.json()
//     }

//     throw res;
// }

// async function callApi(...params) {
//     console.log(...params)
//     let res = await fetch(...params);
//     if (res.status === 200) {
//         return await res.json()
//     }

//     if (res.status === 403) {

//         res = await res.json();

//         if (res.error_code === 'TOKEN_EXPIRED') {
//             let check = await refreshToken();
//             if (check) {
//                 let res = await fetch(...params);
//                 if (res.status === 200) {
//                     return await res.json()
//                 }
//             }
//         }
//     }
// }


// export default (url) => {

//     return {
//         get: () => {
//             let params = [domain + url, { headers }]
//             return callApi(...params)
//         },
//         post: (data) => {
//             let params = [domain + url, { headers, ...data, method: 'POST' }]
//             return callApi(...params)
//         },
//         put: (data) => {
//             let params = [domain + url, { headers, ...data, method: 'PUT' }]
//             return callApi(...params)
//         },
//         delete: () => {
//             let params = [domain + url, { headers, method: 'DELETE' }]
//             return callApi(...params)
//         }
//     }
// }


let domain = 'https://cfd-reactjs.herokuapp.com/';

let headers = {
    'Content-Type': 'application/json'
}
let user = {}
try {
    user = JSON.parse(localStorage.getItem('user'));
    headers.Authorization = `Bearer ${user.accessToken}`
} catch (err) {

}



async function cacheTokenExpired(res, head) {
    if (res.status === 403) {
        res = await res.json()
        if (res.error_code === 'TOKEN_EXPIRED') {
            let res2 = await fetch(domain + 'api/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refreshToken: user.refreshToken
                })
            })
            if (res2.status === 200) {
                res2 = await res2.json()
                if (res2.accessToken) {
                    try {
                        let user = JSON.parse(localStorage.getItem('user'));
                        user.accessToken = res2.accessToken;
                        localStorage.setItem('user', JSON.stringify(user))
                        headers.Authorization = `Bearer ${user.accessToken}`

                        return fetch(...head).then(res => res.json())

                    } catch (err) {

                    }
                }
            }
        }
    } else {
        return res.json();
    }
}

export default function Api(url) {

    return {
        get: () => {

            let head = [domain + url, {
                headers
            }]

            return fetch(...head).then(res => cacheTokenExpired(res, head))
        },
        post: (data) => {
            let head = [domain + url, { headers, method: 'POST' }]

            return fetch(...head).then(res => cacheTokenExpired(res, head))
        },
        put: () => { 
            let head = [domain + url, { headers, method: 'PUT' }]

            return fetch(...head).then(res => cacheTokenExpired(res, head))
        },
        delete: () => { 
            let head = [domain + url, { headers, method: 'DELETE' }]

            return fetch(...head).then(res => cacheTokenExpired(res, head))
        },
    }
}
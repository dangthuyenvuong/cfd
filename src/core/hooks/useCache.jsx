import {useState, useEffect} from 'react'
import Api from 'core/Api';

let store = {}


try{
    store = JSON.parse(sessionStorage.getItem('store')) || {}
}catch(err){

}


export default function useCache(name, params = []){
    let [data, setData] = useState(store?.[name] || null);

    useEffect(() => {

        if(!data){
            Api(name)
            .get({
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjA3MzE1MDg2LCJleHAiOjIwODA2NzkwODZ9.cDPTTv6nN8z5PwBQh4EeYGGvO0rFxb_TR9wReFedtHo'
                }
            })
            .then(res => {
                store[name] = res;
                sessionStorage.setItem('store', JSON.stringify(store))
                setData(res)
            })
        }

        // GraphQLClient.query(
        //     `{
        //         blog_posts (page: ${params.page || 1}){
        //             data {
        //                 _id
        //                 title
        //                 description
        //                 cover
        //                 author{
        //                   title
        //                 }
        //                 categories{
        //                   title
        //                 }
        //                 time_read
        //                 published_at
        //               }
        //               paginate
        //         }
        //       }
        //       `
        // )
        //     .then(res => {
        //         setData(res?.data?.blog_posts)
        //     })


        

    }, params)


    return [
        data, setData
    ]
}
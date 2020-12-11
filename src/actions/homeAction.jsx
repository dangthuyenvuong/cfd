import { GraphQLClient } from "../core/Api";
import {INIT_DATA} from './index';

export function init(dispatch) {
    GraphQLClient.query(`
                {
                    online: elearning_courses(course_type: "online", limit: 6) {
                    data {
                        title
                        short_description
                        _id
                        thumbnail
                        course_status
                        slug
                        cfd_teacher {
                            title
                            avatar
                        }
                    }
                    }
                    offline: elearning_courses(course_type: "offline", limit: 6) {
                        data {
                            title
                            short_description
                            _id
                            thumbnail
                            slug
                            course_status
                            cfd_teacher {
                                title
                                avatar
                            }
                        }
                    }
                }
                `).then(result => {
        if (result && result.data) {
            console.log('aaaaa')
            dispatch(homeInitDataSuccess({
                offline: result.data.offline.data,
                online: result.data.online.data
            }))
            // setCourse({
            //     offline: result.data.offline.data,
            //     online: result.data.online.data
            // })

        }
    });


    
}



const homeInitDataSuccess = (data) => ({ type: INIT_DATA, payload: data })
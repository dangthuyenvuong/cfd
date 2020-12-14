import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import Api, { GraphQLClient } from 'core/Api';
import { useCache } from 'core/Cache';
import Banner from './components/Banner';
import Content from './components/Content';
import Project from './components/Project';
import RelationCourse from './components/RelationCourse';


export default function CourseDetail() {

    let routeParams = useParams();
    let [course, setCourse] = useCache(`chi-tiet-${routeParams.slug}`, null)
    let [relative, setRelative] = useState([]);
    let [loading, setLoading] = useState(!course)


    useEffect(() => {
        console.log('API')
        if (!course) {
            // Api(`rest/elearing_course/?slug=${routeParams.slug}`)
            //     .get()
            //     .then(res => {
            //         console.log(res);
            //     })

            GraphQLClient.query(`
                {
                    elearning_course(slug: "${routeParams.slug}") {
                        benefits
                        cfd_teacher {
                            title
                            avatar
                            description
                            position
                        }
                        mentor {
                            title
                            avatar
                            description
                            position
                        }
                        close_time
                        count_video
                        course_status
                        course_type
                        khoa
                        money
                        _id
                        thumbnail
                        visibility
                        title
                        slug
                        short_description
                        required
                        schedule
                        content
                        opening_time
                        course_type
                    }
                    relative: elearning_courses(course_status: "sap-khai-giang", limit: 3) {
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
                    setCourse(() => result.data.elearning_course)
                    setRelative(() => result.data.relative.data)
                    setLoading(false)
                }
            });
        }
    }, [routeParams.slug])

    if (loading) return <LoadingPage />
    return (
        <div className="course-detail">
            <Banner course={course} />
            <Content course={course} />
            {/* <Project course={course}/> */}
            <RelationCourse course={relative} />
        </div >
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import Api from '../../core/Api';
import { useCache } from '../../core/Cache';
import Banner from './components/Banner';
import Content from './components/Content';
import Project from './components/Project';
import RelationCourse from './components/RelationCourse';


export default function CourseDetail() {

    let routeParams = useParams();
    let [course, setCourse] = useCache(routeParams.id, null)
    let [loading, setLoading] = useState(!course)

    
    useEffect(() => {
        console.log('API')
        if(!course){
            Api(`rest/elearing_course/${routeParams.id}`)
            .get()
            .then(res => {
                console.log(res);
            })
        }
    }, [course, routeParams.id])

    if(loading) return <LoadingPage />

    return (
        <div className="course-detail">
            <Banner course={course}/>
            <Content course={course}/>
            {/* <Project course={course}/> */}
            <RelationCourse course={course}/>
        </div >
    )
}

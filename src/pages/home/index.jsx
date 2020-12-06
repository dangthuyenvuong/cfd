import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import SectionCourse from './components/SectionCourse';
import Special from './components/Special';
import Comment from './components/Comment';
import { useAuth } from '../../core/hooks/useAuth';
import Gallery from './components/Gallery';
import Register from './components/Register';
import Api from '../../core/Api';
// import { useAuth } from '../../core/hooks/useAuth';

export default function Home({ label, name }) {

    let [count, setCount] = useState(0);

    // let { label, name } = props;

    // let label = props.label
    // let name = props.name

    // label = 'asdfsdf'

    let { user } = useAuth();

    let [course, setCourse] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:8888/api/elearning_course', {
        //     headers: {
        //         'Authorization': 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZ1b25nLmRhbmdAZG5hLnZuIiwiX2lkIjoiNWZhZmFkYjgzMzRlZTkyZjQ0MmQ3YTNjIiwiaWF0IjoxNjA3MjQzMTgxLCJleHAiOjE2MDczMjk1ODF9.ZZrr8P7ZOw7xcxyhx6c2mBgyR4AuKUwuoXz0ahAn2fA'
        //     }
        // })

        Api('api/elearning_course')
            .get()
            .then(res => {
                console.log(res)
                if (res.data) {
                    setCourse(res.data);
                }
            })
    }, [])


    return (
        <div className="homepage">
            <Banner />
            <SectionCourse online={course} offline={course} />
            <Special />
            {/* <section className="section-3">
            <div className="container">
                <div className="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div className="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div className="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
            <Comment />
            <Gallery />
            <Register />
        </div>
    )

}



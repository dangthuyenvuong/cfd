import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import SectionCourse from './components/SectionCourse';
import Special from './components/Special';
import Comment from './components/Comment';
import { useAuth } from '../../core/hooks/useAuth';
import Gallery from './components/Gallery';
import Register from './components/Register';
import Api, { GraphQLClient } from '../../core/Api';
import { useCache } from '../../core/Cache';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../../actions/homeAction';
// import * as Cache from '../../core/Cache';
// import { useAuth } from '../../core/hooks/useAuth';

export default function Home() {

    let [count, setCount] = useState(0);

    let { user } = useAuth();

    let store = useSelector(store => store.home)
    let dispatch = useDispatch();

    useEffect(() => {
        init(dispatch)
    }, [])


    // console.log(course)
    return (
        <div className="homepage">
            <Banner />
            <SectionCourse {...store} />
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



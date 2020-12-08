import CourseCard from './../../../components/CourseCard'


export default function SectionCourse({ courses = [] }) {



    let offline = courses.filter(e => e.course_type === 'offline')
    let online = courses.filter(e => e.course_type !== 'offline')

    offline = offline.slice(0, 6)
    online = online.slice(0, 6)

    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            offline.map(e => <CourseCard key={e._id} {...e} />)
                        }
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            online.map(e => <CourseCard key={e._id} {...e} />)
                        }
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}
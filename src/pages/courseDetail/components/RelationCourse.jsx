import { useParams } from "react-router-dom"
import CourseCard from "../../../components/CourseCard";
import { useCache } from "../../../core/Cache";

export default function RelationCourse() {

    let routeParams = useParams();

    let [courses, setCourses] = useCache('index-course', [])

    let relative = courses.filter(e => e.course_status === 'sap-khai-giang' && routeParams.id !== e._id);
    
    relative.sort(() => 0.5 - Math.random())
    
    relative = relative.slice(0, 3)

    return (
        <section className="section-4">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">Khóa học</h3>
                    <h2 className="main-title">Liên quan</h2>
                </div>
                <div className="list row">
                    {
                        relative.map( (e, i) => <CourseCard key={i} {...e}/>)
                    }
                </div>
            </div>
        </section>
    )
}

import { useParams } from "react-router-dom"
import CourseCard from "../../../components/CourseCard";
import { useCache } from "../../../core/Cache";

export default function RelationCourse({course}) {

   

    return (
        <section className="section-4">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">Khóa học</h3>
                    <h2 className="main-title">Liên quan</h2>
                </div>
                <div className="list row">
                    {
                        course.map( (e, i) => <CourseCard key={i} {...e}/>)
                    }
                </div>
            </div>
        </section>
    )
}

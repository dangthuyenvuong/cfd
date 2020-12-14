import CourseCard from "../../../components/CourseCard";

export default function RelationCourse({ course } : { course:never[] }) {


    return (
        <section className="section-4">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">Khóa học</h3>
                    <h2 className="main-title">Liên quan</h2>
                </div>
                <div className="list row">
                    {
                        course.map((e: any, i: number) => <CourseCard key={i} {...e} />)
                    }
                </div>
            </div>
        </section>
    )
}

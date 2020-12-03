import { Link } from "react-router-dom";

export default function CourseCard({ title, description, cover, id = "16" }) {
    return (
        <div className="col-md-4 course__item">
            <a className="course__item-img">
                <img src={cover} alt="alter" />
            </a>
            <div className="course__item-info">
                <div className="course__item-wrap">
                    <h2 className="course__item-title">{title}</h2>
                    <p className="course__item-des">{description}</p>
                </div>
                <div className="course__item-details">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <Link to={`/dang-ky/khoa-hoc-${id}`} className="btn btn-register">Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {

    let courseRef = useRef();
    useEffect(() => {
        // console.log(courseRef.current)
    }, [])

    let { title, short_description, thumbnail, slug, _id, course_status, cfd_teacher } = props;

    let cover = thumbnail.link
    let teacher = cfd_teacher?.[0] || {}

    return (

        <div className="col-md-4 course" ref={courseRef}>
            <div className="wrap">
                <Link className="cover" to={{
                    pathname: `/dang-ky/${slug}-p${_id}`,
                    state: {[props._id]: props}
                }}>
                    <img src={cover} alt="" />
                    {
                        course_status === 'sap-khai-giang' ?
                            <span className="badge b3">Sắp khai giảng</span> :
                            course_status === 'dang-dien-ra' ?
                                <span className="badge b2">Đang diễn ra</span> :
                                <span className="badge b1">Đã kết thúc</span>
                    }
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                12
                            </div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <a className="name" href="#">{title}</a>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar?.link} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link to={{
                        pathname: `/dang-ky/${slug}-p${_id}`,
                        state: {[props._id]: props}
                    }} className="register-btn">Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}
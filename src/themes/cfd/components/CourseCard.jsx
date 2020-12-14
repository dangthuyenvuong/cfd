import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LoadingLink from 'core/components/LoadingLink'


export default function CourseCard(props) {

    let courseRef = useRef();
    useEffect(() => {
        // console.log(courseRef.current)
    }, [])

    let { title, short_description, thumbnail, slug, _id, course_status, cfd_teacher } = props;

    let cover = thumbnail.link

    return (

        <div className="col-md-4 course" ref={courseRef}>
            <div className="wrap">
                <LoadingLink className="cover" to={{
                    pathname: `/chi-tiet-khoa-hoc/${slug}`,
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
                </LoadingLink>
                <div className="info">
                    <Link className="name" to="/chi-tiet-khoa-hoc">{title}</Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={cfd_teacher.avatar?.link} alt="" />
                        </div>
                        <div className="name">{cfd_teacher.title}</div>
                    </div>
                    {
                        course_status === 'sap-khai-giang' ?
                        <Link to={{
                            pathname: `/dang-ky/${slug}`,
                        }} className="register-btn">Đăng ký</Link>
                        : 
                        <Link to={{
                            pathname: `/chi-tiet-khoa-hoc/${slug}`,
                        }} className="register-btn">Chi tiết</Link>
                    }

                </div>
            </div>
        </div>
    )
}
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ name, short_content, cover, _id, ...ref }) {

    let courseRef = useRef();
    useEffect(() => {
        // console.log(courseRef.current)
    }, [])



    return (

        <div className="col-md-4 course" ref={courseRef}>
            <div className="wrap">
                <Link className="cover" to={{
                    pathname: `/dang-ky/khoa-hoc-${_id}`,
                    state: { name, short_content, cover, _id, ...ref }
                }}>
                    <img src={cover} alt="" />
                    <span className="badge b1">Đã kết thúc</span>
                    {/* <span className="badge b2">Đang diễn ra</span>
                    <span className="badge b3">Sắp khai giảng</span> */}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="img/icon-user-white.svg" alt="" />
                                12
                            </div>
                            <div className="heart">
                                <img src="img/icon-heart.svg" alt="" /> 100
                            </div>
                        </div>
                        <div className="share">
                            <img src="img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <a className="name" href="#">{name}</a>
                    <p className="des">{short_content}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                    </div>
                    <Link to={{
                        pathname: `/dang-ky/khoa-hoc-${_id}`,
                        state: { name, short_content, cover, _id, ...ref }
                    }} className="register-btn">Đăng ký</Link>
                </div>
            </div>
        </div>
    )
}
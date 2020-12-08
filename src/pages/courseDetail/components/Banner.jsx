import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner({ course }) {

    let checkRegister = course.course_status === 'sap-khai-giang' || (new Date().getTime() < new Date(course.opening_time).getTime())


    return (
        <section className="banner style2" style={{ '--background': course.template_color_banner || '#cde6fb'}}>
            <div className="container">
                <div className="info">
                    <h1>{course.title}</h1>
                    <div className="row">
                        <div className="date"><strong>Khai giảng:</strong> {course.opening_time}</div>
                        <div className="time"><strong>Thời lượng:</strong> {course.content.length} buổi</div>
                    </div>
                    {
                        checkRegister ? <Link to={`/dang-ky/${course.slug}-p${course._id}`} className="btn white round" style={{ '--color-btn': course.template_color_btn || '#00000050'}}>đăng ký</Link> :
                            <p style={{ fontSize: 17 }}>{ course.course_status === 'dang-dien-ra' ? 'Khóa học đang diễn ra bạn không thể đăng ký' : 'Khóa học đã kết thúc bạn không thể đăng ký' }</p>
                    }

                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="video">
                        <div className="icon">
                            <img src="/img/play-icon-white.png" alt="" />
                        </div> <span>giới thiệu</span>
                    </div>
                    <div className="money">{course.money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VND</div>
                </div>
            </div>
        </section >
    )
}

import { Link } from 'react-router-dom';
import ContentCourse from './ContentCourse'


export default function Content({ course }) {



    let teacher = course.cfd_teacher?.[0] || {};

    return (
        <section className="section-2">
            <div className="container">
                <p className="des">{course.long_description}</p>
                <h2 className="title">giới thiệu về khóa học</h2>
                <div className="cover">
                    <img src="/img/course-detail-img.png" alt="" />
                </div>
                <h3 className="title">nội dung khóa học</h3>
                <ContentCourse content={course.content} />
                <h3 className="title">yêu cầu cần có</h3>
                <div className="row row-check">
                    {
                        course.required.map((e, i) => <div className="col-md-6" key={i}>{e.content}</div>)
                    }

                </div>
                <h3 className="title">hình thức học</h3>
                <div className="row row-check">
                    {
                        course.benefits.map((e, i) => <div className="col-md-6" key={i}>{e.content}</div>)
                    }

                </div>
                <h3 className="title">
                    <div className="date-start">lịch học</div>
                    <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                </h3>
                <p>
                    <strong>Ngày bắt đầu: </strong> {course.opening_time} <br />
                    <strong>Thời gian học: </strong> {course.schedule}
                </p>
                <h3 className="title">Người dạy</h3>
                <div className="teaches">
                    <Teacher {...teacher} />
                </div>
                <h3 className="title">Người hướng dẫn</h3>
                <div className="teaches mentors">
                    {
                        course.mentor.map((e, i) => <Teacher key={i} {...e} />)
                    }

                </div>
                <div className="bottom">
                    <div className="user">
                        <img src="img/user-group-icon.png" alt="" /> {course.number_student_default} bạn đã đăng ký
                    </div>
                    <Link to={`/dang-ky/${course.slug}-p${course._id}`} className="btn main btn-register round">đăng ký</Link>
                    <div className="btn-share btn overlay round btn-icon">
                        <img src="/img/facebook.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}


function Teacher({ avatar, title, position, description, website }) {
    return (
        <div className="teacher">
            <div className="avatar">
                <img src={avatar.link} alt="" />
            </div>
            <div className="info">
                <div className="name">{title}</div>
                <div className="title">{position}</div>
                <p className="intro" dangerouslySetInnerHTML={{ __html: description }}></p>
                {
                    website && <p><strong>Website:</strong> <a href={website} target="_blank">teacher.website</a></p>
                }
            </div>
        </div>
    )
}
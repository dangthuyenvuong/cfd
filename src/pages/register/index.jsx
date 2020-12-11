import './style.scss'

// import { useAuth } from '../../core/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import { useAuth } from '../../core/hooks/useAuth';
// import useValidateForm from '../../core/hooks/useValidateForm';
import useValidateForm from '../../core/hooks/useValidateForm';
import Api from '../../core/Api';
import { useCache } from '../../core/Cache';



export default function Register() {


    let { data, error, inputChange, onSubmit } = useValidateForm({
        // name: '',
        phone: '',
        // email: '',
        facebook: '',
        payment: '',
        note: ''
    }, {
        validate: {
            name: {
                required: true
            },
            email: {
                required: true,
                pattern: 'email'
            },
            phone: {
                required: true,
                pattern: 'phone'
            },
            facebook: {
                required: true,
            },
        },
        message: {
            name: {
                required: 'Họ tên là bắt buộc'
            },
            email: {
                required: 'Email là bắt buộc',
                pattern: 'Email không đúng định dạng'
            },
            phone: {
                required: 'Số điện thoại là bắt buộc',
                pattern: 'Số điện thoại không đúng định dạng'
            },
            facebook: {
                required: "Link Facebook là bắt buộc"
            }
        }
    })

    let { user } = useAuth();


    function submit() {
        let error = onSubmit()
        if (!error) {
            console.log('Call ajax')
        }
    }

    let routeParam = useParams();

    let [course, setCourse] = useCache(`dang-ky-${routeParam.slug}`, null)

    useEffect(() => {
        document.scrollingElement.scrollTop = 0


        if (!course) {
            Api(`rest/elearning_course/?slug=${routeParam.slug}`)
                .get()
                // fetch(`http://localhost:8888/api/elearning_course/${routeMatch.params.id}`, {
                //     headers: {
                //         'Authorization': 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZ1b25nLmRhbmdAZG5hLnZuIiwiX2lkIjoiNWZhZmFkYjgzMzRlZTkyZjQ0MmQ3YTNjIiwiaWF0IjoxNjA3MTU5MTYxLCJleHAiOjE2MDcyNDU1NjF9.ECfb4Ng0hkx9k5aNZl0KoQAxZRcEntKMxvhNb0dMfuU'
                //     }
                // })
                .then(res => {
                    if (res?.data?.[0]) {
                        setCourse(res.data[0])
                    }

                })

        }


    }, [])


    if (!course) return <LoadingPage />

    return (
        <div className="register-course">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course.title} - {course.course_type === 'offline' ? 'Offline' : 'Online'}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> {course.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> {course.count_video} buổi</div>
                            <div className="time"><strong>Học phí:</strong> {course.money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" name="name" disabled value={user.title} placeholder="Họ và tên bạn" />
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input type="text" name="phone" onChange={inputChange} value={data.phone} placeholder="Số điện thoại" />
                                {error.phone && <p className="input-error">{error.phone}</p>}
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input type="text" name="email" disabled value={user.email} placeholder="Email của bạn" />
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input type="text" name="facebook" onChange={inputChange} value={data.facebook} placeholder="https://facebook.com" />
                                {error.facebook && <p className="input-error">{error.facebook}</p>}
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark"></span>
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" name="note" onChange={inputChange} value={data.note} placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={submit}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="register-success">
                <div className="contain">
                    <div className="main-title">đăng ký thành công</div>
                    <p>
                        <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br />
                        Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                        hoặc số điện thoại của bạn.
                    </p>
                </div>
                <a href="/" className="btn main rect">về trang chủ</a>
            </div> */}

        </div>
    )
}

Register.prepare = {
    a: 1
}
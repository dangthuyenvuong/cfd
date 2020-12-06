import './style.scss'

// import { useAuth } from '../../core/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import LoadingPage from '../../components/LoadingPage';
import { useAuth } from '../../core/hooks/useAuth';
// import useValidateForm from '../../core/hooks/useValidateForm';
import useValidateForm from '../../core/hooks/useValidateForm';
import Api from '../../core/Api';



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

    let routeMatch = useRouteMatch();
    let location = useLocation();

    let [course, setCourse] = useState({ ...location.state })
    let [loading, setLoading] = useState(!course?._id)

    useEffect(() => {
        document.scrollingElement.scrollTop = 0


        if (!course?._id) {
            Api(`api/elearning_course/${routeMatch.params.id}`)
            .get()
            // fetch(`http://localhost:8888/api/elearning_course/${routeMatch.params.id}`, {
            //     headers: {
            //         'Authorization': 'Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZ1b25nLmRhbmdAZG5hLnZuIiwiX2lkIjoiNWZhZmFkYjgzMzRlZTkyZjQ0MmQ3YTNjIiwiaWF0IjoxNjA3MTU5MTYxLCJleHAiOjE2MDcyNDU1NjF9.ECfb4Ng0hkx9k5aNZl0KoQAxZRcEntKMxvhNb0dMfuU'
            //     }
            // })
                .then(function(res){
                    console.log(res)
                    if (res.status === 200) {
                        return res.json()
                    }
                })
                .then(res => {
                    setCourse(res)
                    setLoading(false)
                })
                .cache(res => {
                    console.log('cache' ,res )
                })
        }


    }, [])


    if (loading) return <LoadingPage />

    return (
        <div className="register-course">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến {course.name} </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> { course.open_day}</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> {course.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input type="text" name="name" disabled value={user.name} placeholder="Họ và tên bạn" />
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
                                    <input type="checkbox" checked="checked" />
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
            <div className="register-success">
                <div className="contain">
                    <div className="main-title">đăng ký thành công</div>
                    <p>
                        <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br />
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
                </div>
                <a href="/" className="btn main rect">về trang chủ</a>
            </div>

        </div>
    )
}

Register.prepare = {
    a: 1
}
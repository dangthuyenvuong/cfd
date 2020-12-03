import { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Register() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        payment: '',
        note: ''
    })

    let params = useParams();
    console.log(params)

    function handleSubmit() {

        let flag = true;
        if (form.name === '') {
            console.log('name khong duoc rong')
            flag = false
        }

        if (!(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(form.email))) {
            console.log('email khong dung dinh dang')
            flag = false

        }

        if (!(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone))) {
            console.log('phone khong dung dinh dang')
            flag = false

        }

        if (form.facebook === '') {
            console.log('facebook khong duoc rong')
            flag = false

        }

        if (flag) {
            // ajax
            console.log('ajax')
        }

    }

    function inputChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value.trim()
        })
    }

    return (
        <main className="registerpage">
            <section className="section register">
                <div className="container">
                    <div className="course">
                        <h2 className="title">đăng ký</h2>
                        <h2 className="type">thực chiến front-end căn bản </h2>
                    </div>
                    <div className="register__wrap">
                        <form action="/" method="POST" className="register__form">
                            <div className="field">
                                <label>Họ và Tên<span>*</span></label>
                                <input type="text" name="name" onChange={inputChange} value={form.name} placeholder="Họ và tên bạn" />
                            </div>
                            <div className="field">
                                <label>Số điện thoại<span>*</span></label>
                                <input type="text" name="phone" onChange={inputChange} value={form.phone} placeholder="Số điện thoại" />
                            </div>
                            <div className="field">
                                <label>Email<span>*</span></label>
                                <input type="text" name="email" onChange={inputChange} value={form.email} placeholder="Email của bạn" />
                            </div>
                            <div className="field">
                                <label>URL Facebook<span>*</span></label>
                                <input type="text" name="facebook" onChange={inputChange} value={form.facebook} placeholder="https://facebook.com" />
                            </div>
                            <div className="field">
                                <label>Hình thức thanh toán</label>
                                <input type="text" name="payment" onChange={inputChange} value={form.payment} placeholder="Chuyển khoản" />
                            </div>
                            <div className="field">
                                <label>Ý kiến cá nhân</label>
                                <input type="text" name="note" onChange={inputChange} value={form.note} placeholder="Định hướng và mong muốn của bạn" />
                            </div>
                            <div className="btn-register btn-save" onClick={handleSubmit}>
                                ĐĂNG KÝ
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
import { useState } from "react"

export default function MyProfile() {


    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        skype: ''
    })

    function inputOnChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value.trim()
        })
    }
    return (
        <div className="tab__content-1">
            <form action="/" method="POST">
                <div className="field">
                    <label>Họ và Tên</label>
                    <input onChange={inputOnChange} type="text" name="name" value={form.name} />
                </div>
                <div className="field">
                    <label>Số điện thoại*</label>
                    <input onChange={inputOnChange} type="text" name="phone" value={form.phone} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input onChange={inputOnChange} type="text" name="email" disabled value={form.email} />
                </div>
                <div className="field">
                    <label>Facebook</label>
                    <input onChange={inputOnChange} type="text" name="facebook" value={form.facebook} />
                </div>
                <div className="field">
                    <label>Skype</label>
                    <input onChange={inputOnChange} type="text" name="skype" value={form.skype} />
                </div>
                <div className="btn-register btn-save">LƯU LẠI</div>
            </form>
        </div>
    )
}
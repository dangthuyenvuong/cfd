import './style.scss'
import useValidateForm from '../../hooks/useValidateForm';



export default function Register() {


    let { data, error, inputChange, onSubmit } = useValidateForm({
        name: '',
        phone: '',
        email: '',
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
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

    // let [form, setForm] = useState({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     facebook: '',
    //     payment: '',
    //     note: ''
    // })

    // function inputChange(e){
    //     setForm({
    //         ...form,
    //         [e.target.name] : e.target.value.trim()
    //     })
    // }

    // function handleSubmit(){


    //     if(!form.name){
    //         console.log('Name la bat buoc')
    //     }

    //     if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(form.phone))){
    //         console.log('phone khong dung dinh dang')
    //     }
    //     if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email))){
    //         console.log('email khong dung dinh dang')
    //     }
    //     if(!form.facebook){
    //         console.log('facebook la bat buoc')
    //     }
    // }


    function submit(){
        let error = onSubmit()
        if(!error){
            console.log('Call ajax')
        }
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
                                <input type="text" name="name" onChange={inputChange} value={data.name} placeholder="Họ và tên bạn" />
                                {error.name && <p className="input-error">{error.name}</p>}
                            </div>
                            <div className="field">
                                <label>Số điện thoại<span>*</span></label>
                                <input type="text" name="phone" onChange={inputChange} value={data.phone} placeholder="Số điện thoại" />
                                {error.phone && <p className="input-error">{error.phone}</p>}
                            </div>
                            <div className="field">
                                <label>Email<span>*</span></label>
                                <input type="text" name="email" onChange={inputChange} value={data.email} placeholder="Email của bạn" />
                                {error.email && <p className="input-error">{error.email}</p>}
                            </div>
                            <div className="field">
                                <label>URL Facebook<span>*</span></label>
                                <input type="text" name="facebook" onChange={inputChange} value={data.facebook} placeholder="https://facebook.com" />
                                {error.facebook && <p className="input-error">{error.facebook}</p>}
                            </div>
                            <div className="field">
                                <label>Hình thức thanh toán</label>
                                <input type="text" name="payment" onChange={inputChange} value={data.payment} placeholder="Chuyển khoản" />
                            </div>
                            <div className="field">
                                <label>Ý kiến cá nhân</label>
                                <input type="text" name="note" onChange={inputChange} value={data.note} placeholder="Định hướng và mong muốn của bạn" />
                            </div>
                            <div className="btn-register btn-save" onClick={submit}>
                                ĐĂNG KÝ
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
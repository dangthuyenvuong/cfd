import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { useAuth } from 'core/hooks/useAuth';
import useValidateForm from 'core/hooks/useValidateForm';
// import { useAuth } from '../../core/hooks/useAuth';
// import useValidateForm from '../../core/hooks/useValidateForm';

export default function Login() {


    let { data, error, inputChange, onSubmit } = useValidateForm({
        email: '',
        password: ''
    }, {
        validate: {
            email: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
            }
        },
        message: {
            email: {
                required: 'Email là bắt buộc',
                pattern: "Email không đúng định dạng"
            },
            password: {
                required: 'Vui lòng điền mật khẩu'
            }
        }
    });

    let [errorMsg, setErrorMsg] = useState('');

    let { user, login } = useAuth();

    // let history = useHistory();
    // let routeMatch = useRouteMatch();

    // useEffect(() => {
    //     if(user.name){
    //         if(routeMatch.url === '/dang-nhap'){
    //             // history.go('/')
    //             // history.goBack();
    //             history.push('/')
    //             console.log(history)
    //         }else{
    //             history.go(0)
    //         }
    //     }
    // }, [])


    function _login() {
        let error = onSubmit();

        if (!error) {
            login(data)
                .then(error => {
                    if(error){
                        setErrorMsg('Email hoặc password không đúng')
                    }
                })

        }
    }

    if (user) return <Redirect to="/" />

    return (
        <div className="popup-form popup-login" style={{ position: 'unset' }}>
            <div className="wrap">
                <div className="ct_login">
                    <h2 className="title">Đăng nhập</h2>
                    <h3>{errorMsg}</h3>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email / Số điện thoại"
                        value={data.email}
                        onChange={inputChange}
                    />
                    {error.email && <p className="input-error">{error.email}</p>}

                    <input
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        value={data.password}
                        onChange={inputChange}
                    />
                    {error.password && <p className="input-error">{error.password}</p>}
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={_login}>đăng nhập</div>
                    <div className="text-register" >
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    {/* <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div> */}
                </div>
                {/* <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back"></div>
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}
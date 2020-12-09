import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../core/hooks/useAuth';
// import { useAuth } from '../core/hooks/useAuth';

export default function Header() {

    let { user } = useAuth();

    let [menuopen, setOpenmenu] = useState(false)
    let headerRef = useRef()
    let overlayRef = useRef()

    useEffect(() => {
        if (menuopen) {
            document.body.classList.add("menu-is-show")

        } else {

            document.body.classList.remove("menu-is-show")

        }

    }, [menuopen])

    function toggleMenu() {
        setOpenmenu(!menuopen);
    }

    function linkChange() {
        document.body.classList.toggle("menu-is-show");
    }


    return (
        <>
            <header id="header" ref={headerRef}>
                <div className="wrap">
                    <div className="menu-hambeger" onClick={toggleMenu}>
                        <div className="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="text" >menu</span>
                    </div>
                    <Link to="/" className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>

                    <div className="right">
                        {
                            user.title ? <div className="have-login">
                                <div className="account">
                                    <Link to="/hoc-vien" className="info">
                                        <div className="name">{user.title}</div>
                                        <div className="avatar">
                                            <img src={user.avatar.link} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/hoc-vien/khoa-hoc">Khóa học của tôi</Link>
                                    <Link to="/hoc-vien">Thông tin tài khoản</Link>
                                    <Link to="/logout">Đăng xuất</Link>
                                </div>
                            </div> :
                                <div className="not-login bg-none">
                                    <Link to="/dang-nhap" className="btn-register">Đăng nhập</Link>
                                    <Link to="/dang-nhap" className="btn main btn-open-login">Đăng ký</Link>
                                </div>
                        }
                    </div>
                </div>
            </header>

            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <Link to="/dang-nhap">Đăng nhập</Link>
                        <Link to="/dang-nhap">Đăng ký</Link>
                    </li>
                    <li className="active">
                        <Link onClick={linkChange} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/team">CFD Team</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/khoa-hoc">Khóa Học</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/du-an">Dự Án</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" ref={overlayRef}></div>
        </>
    )
}
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Header() {

    let {user} = useAuth();

    let [menuopen, setOpenmenu] = useState(false)
    let headerRef = useRef()

    useEffect(() => {
        if (menuopen) {
            document.getElementsByTagName("main")[0].style.marginLeft = "250px";
            document.body.style.overflow = "hidden";
            document.body.classList.add("menu-is-show")
            headerRef.current.classList.add('open-menu')
        } else {
            document.getElementsByTagName("main")[0].style.marginLeft = "0";
            document.body.removeAttribute("style");
            document.body.classList.remove("menu-is-show")
            headerRef.current.classList.remove('open-menu')

        }


        // document.body.classList.toggle("menu-is-show");
        // if (document.body.classList.contains("menu-is-show")) {
        //     document.getElementsByTagName("main")[0].style.marginLeft = "250px";
        //     document.body.style.overflow = "hidden";
        // } else {
        //     document.getElementsByTagName("main")[0].style.marginLeft = "0";
        //     document.body.removeAttribute("style");
        // }
    }, [menuopen])

    function toggleMenu() {
        setOpenmenu(!menuopen);
    }

    function linkChange() {
        document.body.classList.toggle("menu-is-show");
        document.getElementsByTagName("main")[0].style.marginLeft = "0";
        document.body.removeAttribute("style");
    }
    return (
        <>
            <header ref={headerRef}>
                <div className="container-fluid">
                    <div className="menu" onClick={toggleMenu}>
                        <div className="burger" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="text">Menu</div>
                    </div>
                    <a href="#" className="logo">
                        <img src="img/logo.svg" alt="black" />
                    </a>
                    {
                        user.name ? <div>{user.name}</div> :
                            <div className="user">
                                <a href="#" className="btn btn-signin">Đăng nhập</a>
                                <a href="#" className="btn btn-register">Đăng ký</a>
                            </div>
                    }

                </div>
            </header>
            <nav className="nav ">
                <ul>
                    <li>
                        <Link onClick={linkChange} to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/dang-ky/khoa-hoc-324">Dang Ky</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/hoc-vien">Ho vien</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/">Hỏi đáp</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/">Hợp tác</Link>
                    </li>
                    <li>
                        <Link onClick={linkChange} to="/demo">Demo</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav"></div>
        </>
    )
}
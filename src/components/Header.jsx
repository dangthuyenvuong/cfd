import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    function toggleMenu() {
        console.log('aaa')

        document.body.classList.toggle("menu-is-show");
        if (document.body.classList.contains("menu-is-show")) {
            document.getElementsByTagName("main")[0].style.marginLeft = "250px";
            document.body.style.overflow = "hidden";
        } else {
            document.getElementsByTagName("main")[0].style.marginLeft = "0";
            document.body.removeAttribute("style");
        }
    }

    function linkChange() {
        document.body.classList.toggle("menu-is-show");
        document.getElementsByTagName("main")[0].style.marginLeft = "0";
        document.body.removeAttribute("style");
    }
    return (
        <>
            <header>
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
                    <div className="user">
                        <a href="#" className="btn btn-signin">Đăng nhập</a>
                        <a href="#" className="btn btn-register">Đăng ký</a>
                    </div>
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
                </ul>
            </nav>
            <div className="overlay_nav"></div>
        </>
    )
}
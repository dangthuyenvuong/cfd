import { useEffect, useRef } from "react"

export default function Banner() {
    let bannerRef = useRef();

    useEffect(() => {
        if(window.innerWidth >= 768){
            loadVideoBG()
        }
    }, []) 

    function loadVideoBG() {
        let videoBgWrap = bannerRef.current.querySelector('.video-bg'),
            srcVideoBg = videoBgWrap.getAttribute('data-src');
        setTimeout(function () {
            videoBgWrap.innerHTML  = '<video autoplay loop muted><source src="' + srcVideoBg + '" type="video/mp4">Your browser does not support the video tag.</video>'
        }, 800);
    }

    return (
        <div className="banner jarallax" ref={bannerRef}>
            <div className="container">
                <div className="content">
                    <h2 className="title">Thực Chiến</h2>
                    <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                    <div className="btn main round">KHÓA HỌC</div>
                </div>
            </div>
            <div className="jarallax-img">
                <img data-src="/img/bg-cover.jpg" alt="" className="lazyload" />
                <div className="video-bg lazyload" data-src="/video/CFD-video-bg2.mp4"></div>
            </div>
        </div>
    )
}
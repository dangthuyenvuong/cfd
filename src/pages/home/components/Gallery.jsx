import { useEffect, useRef } from "react"
let $ = window.$;

export default function Gallery() {
    let listRef = useRef(),
        processRef = useRef(),
        nextRef = useRef(),
        prevRef = useRef();

    useEffect(() => {
        teamSlider()
    }, [])

    function teamSlider() {

        $(listRef.current).flickity({
            contain: true,
            wrapAround: false,
            freeScroll: true,
            cellAlign: 'left',
            lazyLoad: 3,
            imagesLoaded: true,
            prevNextButtons: false
        })

        // var flkty = $carousel.data('flickity');
        // var $imgs = $('.homepage .section-4 .list .carousel-cell img');

        // $carousel.on('scroll.flickity', function (event, progress) {
        //     flkty.slides.forEach(function (slide, i) {
        //         var img = $imgs[i];
        //         var x = (slide.target + flkty.x) * -1 / 14;
        //         img.style.transform = 'translateX( ' + x + 'px)';
        //     });
        // });

        $(listRef.current).on('scroll.flickity', function (event, progress) {
            console.log('scroll')
            progress = Math.max(0.05, Math.min(1, progress));
            processRef.current.style.width = progress * 100 + '%';
        });

        $(prevRef.current).on('click', function () {
            listRef.current.flickity('previous');
        });
        $(nextRef.current).on('click', function () {
            listRef.current.flickity('next');
        });
    }

    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list" ref={listRef}>
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team1.png" alt="" />
                <img data-flickity-lazyload="img/img_team2.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
                <img data-flickity-lazyload="img/img_team3.png" alt="" />
                <div className="item carousel-cell">
                    <img data-flickity-lazyload="img/img_team4.png" alt="" />
                </div>
            </div>
            <div className="controls">
                <div className="btn_ctr prev" ref={prevRef}></div>
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" ref={processRef}></div>
                </div>
                <div className="btn_ctr next" ref={nextRef}></div>
            </div>
        </section>
    )
}
